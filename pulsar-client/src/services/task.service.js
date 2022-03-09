import axios from "axios";

const host = `${location.protocol}//${location.hostname}`;

class TaskService {
  async fetch() {
    const res = await axios.get(`${host}/tasks`);
    return res.data;
  }

  async fetchById(id) {
    const res = await axios.get(`${host}/tasks/${id}`);
    return res.data;
  }

  async create(task) {
    const newTask = await axios.post(`${host}/tasks`, task);
    return newTask.data;
  }

  async remove(id) {
    const removedTask = await axios.delete(`${host}/tasks/${id}`);
    return removedTask.data;
  }

  async update(task) {
    return await axios.put(`${host}/tasks/${task.id}`, task);
  }
}

export default new TaskService();
