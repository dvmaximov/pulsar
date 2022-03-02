import { makeAutoObservable } from "mobx";
import worksService from "../services/works.service";
import worksStaticService from "../services/static/works.service.static";

const service =
  import.meta.env.VITE_STORE === "STATIC" ? worksStaticService : worksService;

class Works {
  workList = [];
  currentWork = null;

  constructor() {
    makeAutoObservable(this);
  }

  fill(data) {
    this.workList = data;
  }

  fillCurrentWork(data) {
    if (data.length > 0) {
      this.currentWork = data[0];
    } else {
      this.currentWork = null;
    }
  }

  async fetch() {
    const result = await service.fetch();
    this.fill(result);
  }

  async fetchCurrentWork() {
    const result = await service.fetchCurrentWork();
    this.fillCurrentWork(result);
  }

  async create(work) {
    const newWork = await service.create(work);
    this.fill([...this.workList, newWork]);
  }

  async remove(work) {
    const result = await service.remove(work.id);
    if (result.removed === 1) {
      const newWorks = this.workList.filter((item) => item.id !== work.id);
      this.fill(newWorks);
    }
    return result.removed;
  }
}

export const works = new Works();
