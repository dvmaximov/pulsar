import format from "date-fns/format";
import { makeAutoObservable } from "mobx";
import settingsService from "../services/settings.service";

const service =
  import.meta.env.VITE_STORE === "STATIC" ? null : settingsService;

class Settings {
  settingList = [];
  SETTING = {};
  serverTime = "";

  constructor() {
    makeAutoObservable(this);
  }

  setServerTime(value) {
    this.serverTime = format(value, "dd-MM-yyyy - HH:mm");
  }

  fill(data) {
    this.settingList = data;
  }

  fillSETTING(data) {
    this.SETTING = data;
  }

  async fetch() {
    const result = await service.fetch();
    this.fill(result.settings);
    this.fillSETTING(result.SETTING);
    await service.getServerTime();
  }

  async update(setting) {
    await service.update(setting);

    const newSettings = [...this.settingList];
    const idx = newSettings.findIndex((item) => item.id === setting.id);
    newSettings[idx] = { ...setting };
    this.fill(newSettings);
  }

  async updateServer() {
    await service.updateServer();
  }

  async shutdown() {
    await service.shutdown();
  }
}

export const settings = new Settings();
