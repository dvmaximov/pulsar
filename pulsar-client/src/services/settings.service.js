import axios from "axios";

const host = `${location.protocol}//${location.hostname}`;

class SettingsService {
  async fetch() {
    const res = await axios.get(`${host}/settings`);
    return res.data;
  }

  async updateServer() {
    await axios.get(`${host}/settings/updateServer`);
  }
}

export default new SettingsService();
