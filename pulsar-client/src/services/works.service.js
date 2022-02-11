import axios from "axios";

const host = import.meta.env.VITE_HOST;

class WorksService {
  async fetch() {
    const res = await axios.get(`${host}/works`);
    return res.data;
  }

  async create(work) {
    const newWork = await axios.post(`${host}/works`, work);
    return newWork.data;
  }

  async remove(id) {
    const removedWork = await axios.delete(`${host}/works/${id}`);
    return removedWork.data;
  }
}

export default new WorksService();
