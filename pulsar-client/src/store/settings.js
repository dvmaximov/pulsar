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
}

export const settings = new Settings();
