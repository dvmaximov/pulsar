import axios from "axios";

const host = import.meta.env.VITE_HOST;

class DictonaryService {
  async fetch() {
    const res = await axios.get(`${host}/dictonary`);
    return res.data;
  }
}

export default new DictonaryService();
