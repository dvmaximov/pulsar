import { tasksData } from "./data/tasks.static.data";

let idx = tasksData.length + 1;

class TaskStaticService {
  data = tasksData;

  async fetch() {
    return this.data;
  }

  async fetchById(id) {
    return this.data.find((item) => item.id === +id);
  }

  async create(task) {
    idx++;
    const newTask = { id: idx, ...task };
    this.data.push(newTask);
    return newTask;
  }

  async remove(id) {
    this.data = this.data.filter((item) => item.id !== id);
    return { removed: 1, error: "" };
  }

  async update(task) {
    const idx = this.data.findIndex((item) => item.id === task.id);
    this.data[idx] = { ...task };
    return task;
  }
}

export default new TaskStaticService();
