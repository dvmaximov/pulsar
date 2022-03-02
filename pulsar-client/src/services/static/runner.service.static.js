import { dictonary } from "../../store";

class RunnerStaticService {
  currentWork = null;
  updateWork = null;

  setUpdaters(updateWork) {
    this.updateWork = updateWork;
  }

  createCurrentWork(work) {}

  async startWork(work) {
    this.currentWork = work;
    const status = await dictonary.getStatus(dictonary.STATUS.STATUS_RUN);
    this.currentWork = {
      ...this.currentWork,
      status,
    };
    await this.updateWork(this.currentWork);
    console.log("status ", dictonary.STATUS.STATUS_RUN);
  }

  async stopWork() {
    const status = await dictonary.getStatus(dictonary.STATUS.STATUS_DONE);
    this.currentWork = {
      ...this.currentWork,
      status,
    };
    await this.updateWork(this.currentWork);
    this.currentWork = null;
    console.log("stop");
  }
}

export default new RunnerStaticService();
