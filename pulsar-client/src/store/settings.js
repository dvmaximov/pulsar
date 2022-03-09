import { makeAutoObservable } from "mobx";
import settingsService from "../services/settings.service";

const service =
  import.meta.env.VITE_STORE === "STATIC" ? null : settingsService;

class Settings {
  settingList = [];

  constructor() {
    makeAutoObservable(this);
  }

  fill(data) {
    this.settingList = data;
  }

  async fetch() {
    const result = await service.fetch();
    this.fill(result);
  }

  async update(setting) {
    try {
      await service.update(setting);

      const newSettings = [...this.settingList];
      const idx = newSettings.findIndex((item) => item.id === setting.id);
      newSettings[idx] = { ...setting };
      this.fill(newSettings);
    } catch (e) {}
  }

  async updateServer() {
    await service.updateServer();
  }

  async shutdown() {
    await service.shutdown();
  }
}

export const settings = new Settings();
