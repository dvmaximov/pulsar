import axios from "axios";

const host = `${location.protocol}//${location.hostname}`;

class SettingsService {
  async fetch() {
    const res = await axios.get(`${host}/settings`);
    return res.data;
  }

  updateServer() {
    axios.get(`${host}/settings/updateServer`);
    setTimeout(() => {
      window.close();
    }, 1000);
  }
}

export default new SettingsService();
