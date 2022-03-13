import { makeAutoObservable } from "mobx";
import dictonaryService from "../services/dictonary.service";
import dictonaryStaticService from "../services/static/dictonary.service.static";

const service =
  import.meta.env.VITE_STORE === "STATIC"
    ? dictonaryStaticService
    : dictonaryService;

class Dictonary {
  actionTypes = [];
  workTypes = [];
  statusTypes = [];
  WORK = {};
  STATUS = {};
  ACTION = {};

  constructor() {
    makeAutoObservable(this);
    this.fetch();
  }

  fill(data) {
    this.actionTypes = data.actionTypes;
    this.workTypes = data.workTypes;
    this.statusTypes = data.statusTypes;
    this.WORK = data.WORK;
    this.STATUS = data.STATUS;
    this.ACTION = data.ACTION;
  }

  async fetch() {
    const result = await service.fetch();
    this.fill(result);
  }

  getStatus(statusId) {
    return this.statusTypes.find((item) => item.id === statusId);
  }
}

export const dictonary = new Dictonary();
