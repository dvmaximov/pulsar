import format from "date-fns/format";
import { makeAutoObservable } from "mobx";
import api from "../services/api.service";

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
    const answer = await api.fetch("settings");
    this.fill(answer.settings.result);
    this.fillSETTING(answer.SETTING);
    await api.fetch("settings/serverTime");
  }

  async update(setting) {
    await api.update("settings", setting);

    const newSettings = [...this.settingList];
    const idx = newSettings.findIndex((item) => item.id === setting.id);
    newSettings[idx] = { ...setting };
    this.fill(newSettings);
  }

  async updateServer() {
    // setTimeout(() => {
    //   window.close();
    // }, 2000);
    await api.fetch(`settings/updateServer`);
  }

  async backup() {
    await api.backup("settings/backup");
  }

  async restore(value) {
    setTimeout(() => {
      window.close();
    }, 2000);
    return await api.restore("settings/restore", value);
  }

  async shutdown() {
    setTimeout(() => {
      window.close();
    }, 2000);
    await api.get(`settings/shutdown`);
  }

  async calibrateAzimuth(time) {
    return await api.fetch(`works/calibrateAzimuth?time=${time}`);
  }

  async calibrateSlope(time) {
    return await api.fetch(`works/calibrateSlope?time=${time}`);
  }
}

export const settings = new Settings();
