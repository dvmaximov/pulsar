import axios from "axios";

const host = import.meta.env.VITE_HOST;

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
    const updatedTask = await axios.put(`${host}/tasks/${task.id}`, task);
    return updatedTask;
  }
}

export default new TaskService();
