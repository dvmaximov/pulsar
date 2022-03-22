// import axios from "axios";
import api from "./api.service";

// const host = `${location.protocol}//${location.hostname}`;

class WorksService {
  async fetch() {
    const res = await axios.get(`${host}/works`);
    return res.result;
  }

  async fetchCurrentWork() {
    const res = await axios.get(`${host}/works/currentWork`);
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

  async stopCurrent(id) {
    return await axios.get(`${host}/works/stopCurrent`);
  }

  async update(work) {
    const updatedWork = await axios.put(`${host}/works/${work.id}`, work);
    return updatedWork;
  }

  async calibrateAzimuth(time) {
    await axios.get(`${host}/works/calibrateAzimuth?time=${time}`);
  }

  async calibrateSlope(time) {
    await axios.get(`${host}/works/calibrateSlope?time=${time}`);
  }
}

export default new WorksService();
