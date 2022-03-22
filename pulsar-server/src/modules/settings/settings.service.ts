import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { SocketService } from "../api/socket.service";
import { defaultSettings } from "./data/settings.data";
import { SETTING } from "./settings.interface";
import { ApiResult, initResult } from "../api/api.interface";
import { copyFileSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import * as path from "path";
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
    let answer = await this.api.getAll("settings");
    if (!answer.result || !Array.isArray(answer.result)) return answer;

    const settings = answer.result;
    if (settings.length === 0) {
      await this.fillSettings();
      answer = await this.api.getAll("settings");
    }
    return { settings: answer, SETTING };
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("settings", id);
  }

  async update(id: number, value: unknown): Promise<ApiResult> {
    return this.api.update("settings", id, value);
  }

  async updateServer(): Promise<ApiResult> {
    const answer = { ...initResult };
    const source = path.resolve(__dirname, "../../update/update.js");

    answer.result = "Ok";
    try {
      await this.cmd(`cd /root/pulsar/pulsar-server`);
      await this.cmd(`rm -rf dist`);
      await this.cmd(`cd /root/pulsar`);
      await this.cmd(`git pull origin master`);
      await this.cmd(`node ${source}`);
    } catch (e) {
      answer.result = null;
      answer.error = e;
    }

    try {
      await this.cmd(`pm2 restart 0`);
    } catch {}

    return answer;
  }

  backup() {
    let name = new Date().toLocaleString();
    name = name
      .replace(/ /g, "")
      .replace(/,/g, "_")
      .replace(/\./g, "-")
      .replace(/:/g, "-")
      .replace(/\//g, "-");
    name = `backupDB_${name}.json`;

    const source = path.resolve(__dirname, "../../../db.json");
    const dist = path.resolve(__dirname, `../../../../backup/${name}`);
    const distPath = path.resolve(__dirname, `../../../../backup`);

    try {
      mkdirSync(distPath);
    } catch {}

    copyFileSync(source, dist);
    let db: any = {};

    try {
      db = readFileSync(dist, "utf8").toString();
      db = JSON.parse(db);
      db["works"] = [];
      db["currentWork"] = [];
      db = JSON.stringify(db);
      writeFileSync(dist, db);
    } catch (e) {
      console.log(e);
    }

    return { fileName: name, dist };
  }

  async restore(value): Promise<any> {
    const answer = { ...initResult };

    answer.result = "Ok";
    try {
      const source = path.resolve(__dirname, "../../../db.json");
      writeFileSync(source, JSON.stringify(value));
      await this.cmd(`pm2 restart 0`);
    } catch (e) {
      answer.result = null;
      answer.error = e;
    }

    return answer;
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
