import { makeAutoObservable } from "mobx";
import taskService from "../services/task.service";
import dictonaryStaticService from "../services/dictonary.service.static";

const service =
  import.meta.env.VITE_STORE === "STATIC"
    ? dictonaryStaticService
    : taskService;

class Dictonary {
  actionTypes = [];

  constructor() {
    makeAutoObservable(this);
    this.fetch();
  }

  fill(data) {
    this.actionTypes = data;
  }

  async fetch() {
    this.fill(await service.fetch());
  }
}

export const dictonary = new Dictonary();
