import axios from "axios";

const host = `${location.protocol}//${location.host}`;

class SettingsService {
  async fetch() {
    const res = await axios.get(`${host}/settings`);
    return res.data;
  }
}

export default new SettingsService();
