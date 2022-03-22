import axios from "axios";
import api from "./api.service";
// const host = `${location.protocol}//${location.hostname}`;

class SettingsService {
  async fetch() {
    const res = await api.fetch("/settings");
    return res.result;
  }

  async getServerTime() {
    const res = await api.fetch("/settings/settings/serverTime");
    return res.result;
  }

  async update(setting) {
    const res = await axios.put("/settings", setting);
    return res.result;
  }

  backup() {
    axios({
      url: `${host}/settings/backup`,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      const type = response.headers["content-type"];
      const blob = new Blob([response.data], { type: type, encoding: "UTF-8" });
      const link = document.createElement("a");
      const fileName = response.headers["content-disposition"]
        .split("filename=")[1]
        .replace(/"/g, "");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    });
  }

  async updateServer() {
    setTimeout(() => {
      window.close();
    }, 2000);
    await axios.get(`${host}/settings/updateServer`);
  }

  async shutdown() {
    setTimeout(() => {
      window.close();
    }, 2000);
    await axios.get(`${host}/settings/shutdown`);
  }
}

export default new SettingsService();
