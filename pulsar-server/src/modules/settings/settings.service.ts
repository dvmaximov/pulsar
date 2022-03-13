import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { SocketService } from "../api/socket.service";
import { defaultSettings } from "./data/settings.data";
import { SETTING } from "./settings.interface";

import * as cp from "child_process";

const exec = cp.exec;

@Injectable()
export class SettingsService {
  constructor(private api: ApiService, private socket: SocketService) {
    const interval = setInterval(() => {
      this.socket.sendServerTime();
    }, 60 * 1000);
  }

  async getAll(): Promise<any> {
    let settings = await this.api.getAll("settings");
    if (settings.length === 0) {
      await this.fillSettings();
      settings = await this.api.getAll("settings");
    }
    return { settings, SETTING };
  }

  async getById(id: number): Promise<any> {
    return await this.api.getById("settings", id);
  }

  async update(id: number, value: unknown): Promise<any> {
    return this.api.update("settings", id, value);
  }

  async updateServer(): Promise<any> {
    try {
      await this.cmd(`cd /root/pulsar/pulsar-server`);
      await this.cmd(`rm -rf dist`);
      await this.cmd(`cd /root/pulsar`);
      await this.cmd(`git pull origin master`);
    } catch (e) {}

    await this.cmd(`node ./src/update/update.ts`);

    try {
      await this.cmd(`pm2 restart 0`);
    } catch (e) {}
  }

  async shutdown(): Promise<any> {
    return await this.cmd(`shutdown now`);
  }

  async serverTime(): Promise<any> {
    return this.socket.sendServerTime();
  }

  private async fillSettings(): Promise<any> {
    for (const setting of defaultSettings) {
      await this.api.create("settings", setting);
    }
    return null;
  }

  private cmd(command): Promise<any> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }
        resolve(stdout);
      });
    });
  }
}
