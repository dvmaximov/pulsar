import { worksData } from "./data/works.static.data";
import RunnerStaticService from "./runner.service.static";

let idx = worksData.length + 1;

class WorksStaticService {
  works = worksData;
  timers = [];

  constructor() {
    RunnerStaticService.setUpdaters(this.update);
    this.fillTimers();
  }

  createTimer(work) {
    const now = new Date().getTime();
    const start = work.startTime;
    if (!start) return null;
    const wait = start - now;
    const timer =
      wait < 0
        ? null
        : setTimeout(() => {
            console.log("timer run", work.id);
            RunnerStaticService.startWork(work);
            this.removeTimer(work.id);
            clearTimeout(timer);
          }, wait);
    return timer;
  }

  removeTimer(workId) {
    const timer = this.timers.find((item) => item.workId === workId);
    if (timer) {
      clearTimeout(timer);
      this.timers = this.timers.filter((item) => item.workId === workId);
    }
  }

  fillTimers() {
    this.timers.forEach((item) => clearTimeout(item.timer));
    this.timers = [];
    this.works.forEach((item) => {
      const timer = this.createTimer(item);
      if (timer) {
        this.timers.push({
          timerId: timer,
          workId: item.id,
        });
      }
    });
  }

  async fetch() {
    return this.works;
  }

  async create(work) {
    idx++;
    const newWork = { id: idx, ...work };
    this.works.push(newWork);
    const timer = this.createTimer(newWork);
    if (!timer) RunnerStaticService.startWork(newWork);
    return newWork;
  }

  update = async (work) => {
    const idx = this.works.findIndex((item) => item.id === work.id);
    this.works[idx] = { ...work };
  };

  async remove(id) {
    this.works = this.works.filter((item) => item.id !== id);
    RunnerStaticService.stopWork();
    this.removeTimer(id);
    return { removed: 1, error: "" };
  }
}

export default new WorksStaticService();
