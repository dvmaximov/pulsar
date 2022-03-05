import axios from "axios";

const host = `${location.protocol}//${location.host}`;

class DictonaryService {
  async fetch() {
    const res = await axios.get(`${host}/dictonary`);
    return res.data;
  }
}

export default new DictonaryService();
