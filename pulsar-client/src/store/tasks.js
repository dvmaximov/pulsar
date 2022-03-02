import { makeAutoObservable } from "mobx";
import taskService from "../services/task.service";
import taskStaticService from "../services/static/task.service.static";

const service =
  import.meta.env.VITE_STORE === "STATIC" ? taskStaticService : taskService;

class Tasks {
  taskList = [];

  constructor() {
    makeAutoObservable(this);
  }

  fill(data) {
    this.taskList = data;
  }

  async remove(task) {
    const result = await service.remove(task.id);
    if (result.removed === 1) {
      const newData = this.taskList.filter((item) => item.id !== task.id);
      this.fill(newData);
    }
    return result.removed;
  }

  async create(task) {
    const newTask = await service.create(task);
    this.fill([...this.taskList, newTask]);
  }

  async update(task) {
    const result = await service.update(task);
    let idx = this.taskList.findIndex((item) => item.id === task.id);
    this.taskList[idx] = { ...task };
  }

  async fetch() {
    this.fill(await service.fetch());
  }

  async fetchById(id) {
    return await service.fetchById(id);
  }
}

export const tasks = new Tasks();
