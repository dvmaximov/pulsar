import { makeAutoObservable } from "mobx";
import api from "../services/api.service";

// import taskService from "../services/task.service";
// import taskStaticService from "../services/static/task.service.static";

// const service =
//   import.meta.env.VITE_STORE === "STATIC" ? taskStaticService : taskService;

class Tasks {
  taskList = [];

  constructor() {
    makeAutoObservable(this);
  }

  fill(data) {
    this.taskList = data;
  }

  async fetch() {
    const answer = await api.fetch("tasks");
    this.fill(answer.result);
  }

  async fetchById(id) {
    const answer = await api.fetchById("tasks", id);
    return answer.result;
  }

  async remove(task) {
    const answer = await api.remove("tasks", task.id);
    const newData = this.taskList.filter((item) => item.id !== task.id);
    this.fill(newData);
    return answer.result;
  }

  async create(task) {
    const answer = await api.create("tasks", task);
    const newTask = answer.result;
    this.fill([...this.taskList, newTask]);
  }

  async update(task) {
    const answer = await api.update("tasks", task);
    let idx = this.taskList.findIndex((item) => item.id === task.id);
    this.taskList[idx] = { ...task };
    return answer.result;
  }
}

export const tasks = new Tasks();
