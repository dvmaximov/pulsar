import { worksData } from "./data/works.static.data";

let idx = worksData.length + 1;

class WorksStaticService {
  works = worksData;

  async fetch() {
    return this.works;
  }

  async create(work) {
    idx++;
    const newWork = { id: idx, ...work };
    this.works.push(newWork);
    return newWork;
  }

  async remove(id) {
    this.works = this.works.filter((item) => item.id !== id);
    return { removed: 1, error: "" };
  }
}

export default new WorksStaticService();
