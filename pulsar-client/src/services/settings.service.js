import axios from "axios";

const host = import.meta.env.VITE_HOST;

class SettingsService {
  async fetch() {
    const res = await axios.get(`${host}/settings`);
    return res.data;
  }
}

export default new SettingsService();
