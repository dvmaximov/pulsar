import { dictonaryData } from "./data/dictonary.static.data";

class DictonaryStaticService {
  data = {
    actionTypes: dictonaryData.actionTypes,
    workTypes: dictonaryData.workTypes,
    statusTypes: dictonaryData.statusTypes,
    WORK: dictonaryData.WORK,
    STATUS: dictonaryData.STATUS,
  };

  async fetch() {
    return this.data;
  }
}

export default new DictonaryStaticService();
