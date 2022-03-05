import axios from "axios";

const host = `${location.protocol}//${location.host}`;

class WorksService {
  async fetch() {
    const res = await axios.get(`${host}/works`);
    return res.data;
  }

  async fetchCurrentWork() {
    const res = await axios.get(`${host}/works/current-work`);
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

  async update(work) {
    const updatedWork = await axios.put(`${host}/works/${work.id}`, work);
    return updatedWork;
  }
}

export default new WorksService();
