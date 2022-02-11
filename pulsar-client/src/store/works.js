import { makeAutoObservable } from "mobx";
import worksService from "../services/works.service";
import worksStaticService from "../services/works.service.static";

const service =
  import.meta.env.VITE_STORE === "STATIC" ? worksStaticService : worksService;

class Works {
  workList = [];

  constructor() {
    makeAutoObservable(this);
  }

  fill(data) {
    this.workList = data;
  }

  async fetch() {
    const result = await service.fetch();
    this.fill(result);
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
