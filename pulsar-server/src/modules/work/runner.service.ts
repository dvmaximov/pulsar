import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { SocketService } from "../api/socket.service";
import { DictonaryService } from "../dictonary/dictonary.service";
import { Work } from "./work.interface";
import { WorksService } from "./works.service";
import { ACTION, ActionType } from "../dictonary/types/actionType.interface";
import { STATUS, StatusType } from "../dictonary/types/statusType.interface";
import { DeviceService } from "./device.service";

const ALONE_ID = 1;

@Injectable()
export class RunnerService {
  private timers = [];
  private currentWork = null;
  private statusTypes = null;
  private actionTypes = null;
  private stopped = false;

  constructor(
    private works: WorksService,
    private api: ApiService,
    private dictonary: DictonaryService,
    private socket: SocketService,
    private device: DeviceService,
  ) {
    this.prepare();
  }

  private async prepare() {
    await this.removeCurrentWork();
    const { statusTypes, actionTypes } = await this.dictonary.getAll();
    this.statusTypes = statusTypes;
    this.actionTypes = actionTypes;
    this.timers = await this.fillTimers();
    await this.checkWorkForRun();
  }

  private createTimer(work) {
    const now = new Date().getTime();
    const start = work.startTime;
    if (!start) return null;
    const wait = start - now;
    const timer =
      wait < 0
        ? null
        : setTimeout(() => {
            this.startWork(work);
            this.removeTimer(work.id);
          }, wait);
    return timer;
  }

  private removeTimer(workId) {
    const timer = this.timers.find((item) => item.workId === +workId);
    if (timer) {
      clearTimeout(timer.timerId);
      this.timers = this.timers.filter((item) => item.workId !== +workId);
    }
  }

  public removeWork(workId) {
    if (this.currentWork && this.currentWork.work.id === +workId) {
      this.removeCurrentWork();
    }
    this.removeTimer(workId);
  }

  public addWork(work): void {
    if (work.status.id == STATUS.STATUS_WAIT) {
      const timer = this.createTimer(work);
      if (timer) {
        this.timers.push({
          timerId: timer,
          workId: work.id,
        });
      }
    } else if (work.status.id == STATUS.STATUS_RUN) {
      this.startWork(work);
    }
  }

  private getStatus(statusId: number): StatusType {
    return this.statusTypes.find((item) => item.id === statusId);
  }

  private getAction(actionId: number): ActionType {
    return this.actionTypes.find((item) => item.id === actionId);
  }

  private async updateStatus(work, statusId) {
    const newStatus = this.statusTypes.find((item) => item.id === statusId);
    if (!newStatus) return;
    work.status = newStatus;
    await this.works.update(work.id, work);
    this.socket.workStatusUpdate();
  }

  // private clearTimers(): void {
  //   this.timers.forEach((item) => clearTimeout(item.timer));
  //   this.timers = [];
  // }

  private async fillTimers() {
    let works = await this.works.getAll();
    works = works.map((item) => item.status.id === STATUS.STATUS_WAIT);
    const timers = [];
    works.forEach((item) => {
      const timer = this.createTimer(item);
      if (timer) {
        timers.push({
          timerId: timer,
          workId: item.id,
        });
      }
    });
    return timers;
  }

  private async checkWorkForRun() {
    let works = await this.works.getAll();
    works = works.filter((item) => item.status.id === STATUS.STATUS_RUN);
    // let candidate = null;
    works.forEach((item) => {
      // if (idx === 0 && !this.currentWork) {
      //   candidate = item;
      // } else {
      this.updateStatus(item, STATUS.STATUS_EXPIRED);
      // }
    });
    // if (candidate) await this.createCurrentWork(candidate);
  }

  private async startWork(work) {
    this.stopped = false;
    if (this.currentWork) {
      this.updateStatus(work, STATUS.STATUS_EXPIRED);
      return;
    }
    await this.createCurrentWork({ ...work });
    await this.updateStatus(work, STATUS.STATUS_RUN);
    await this.startLoop();
    await this.updateStatus(work, STATUS.STATUS_DONE);
    await this.removeCurrentWork();
  }

  private async createCurrentWork(work: Work): Promise<any> {
    this.currentWork = {
      id: ALONE_ID,
      work,
    };
    await this.api.create("currentWork", this.currentWork);
    await this.prepareDetails();
    await this.updateCurrentWork();
  }

  private async updateCurrentWork(): Promise<Work> {
    this.socket.workStatusUpdate();
    return await this.api.update("currentWork", ALONE_ID, this.currentWork);
  }

  private async removeCurrentWork(): Promise<any> {
    try {
      this.currentWork = null;
      await this.api.delete("currentWork", ALONE_ID);
    } catch {}
  }

  private async prepareDetails(): Promise<any> {
    if (!this.currentWork) return;
    const actions = this.currentWork.work.item.actions;
    const defaultStatus = this.getStatus(STATUS.STATUS_WAIT);
    const waitAction = this.getAction(ACTION.ACTION_WAIT);
    const details = [];
    for (const action of actions) {
      switch (action.type.id) {
        case ACTION.ACTION_AZIMUTH:
        case ACTION.ACTION_SLOPE:
        case ACTION.ACTION_WAIT:
          details.push({ ...action, status: { ...defaultStatus } });
          break;
        case ACTION.ACTION_SPARK:
          for (let i = 0; i < action.value1; i++) {
            details.push({
              ...action,
              id: `${action.id}_${i}`,
              value1: 1,
              value2: action.value2,
              value3: 0,
              status: { ...defaultStatus },
            });
            details.push({
              ...action,
              id: `${action.id}_w${i}`,
              type: { ...waitAction },
              value1: action.value3,
              value2: 0,
              value3: 0,
              status: { ...defaultStatus },
            });
          }
          details.pop();
          break;
      }
    }
    this.currentWork.work.details = [...details];
  }

  private async startLoop() {
    if (!this.currentWork) return;
    const details = this.currentWork.work.details;
    for (let i = 0; i < details.length; i++) {
      if (this.stopped) break;
      details[i].status = this.getStatus(STATUS.STATUS_RUN);
      await this.updateCurrentWork();

      switch (details[i].type.id) {
        case ACTION.ACTION_AZIMUTH:
          await this.device.setAzimuth(details[i].value1);
          break;
        case ACTION.ACTION_SLOPE:
          await this.device.setSlop(details[i].value1);
          break;
        case ACTION.ACTION_WAIT:
          await this.device.setWait(details[i].value1);
          break;
        case ACTION.ACTION_SPARK:
          await this.device.setSpark(details[i].value1);
          break;
      }
      details[i].status = this.getStatus(STATUS.STATUS_DONE);
      await this.updateCurrentWork();
    }
  }

  async stopAll(): Promise<any> {
    this.stopped = true;
    await this.device.stopAll();
    if (this.currentWork) {
      this.updateStatus(this.currentWork.work, STATUS.STATUS_DONE);
      await this.removeCurrentWork();
    }
  }
}