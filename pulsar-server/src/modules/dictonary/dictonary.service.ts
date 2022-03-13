import { Injectable } from "@nestjs/common";

import { ApiService } from "../api/api.service";
import { WORK } from "./types/workType.interface";
import { ACTION } from "./types/actionType.interface";
import { STATUS } from "./types/statusType.interface";
import { defaultActions } from "./data/actionTypes.data";
import { defaultWorks } from "./data/workTypes.data";
import { defaultStatus } from "./data/statusTypes.data";

@Injectable()
export class DictonaryService {
  constructor(private api: ApiService) {}

  async getAll(): Promise<any> {
    let actionTypes = await this.api.getAll("actionTypes");
    if (actionTypes.length === 0) {
      await this.fillActionTypes();
      actionTypes = await this.api.getAll("actionTypes");
    }

    let workTypes = await this.api.getAll("workTypes");
    if (workTypes.length === 0) {
      await this.fillWorkTypes();
      workTypes = await this.api.getAll("workTypes");
    }

    let statusTypes = await this.api.getAll("statusTypes");
    if (statusTypes.length === 0) {
      await this.fillStatusTypes();
      statusTypes = await this.api.getAll("statusTypes");
    }

    return { actionTypes, workTypes, statusTypes, WORK, STATUS, ACTION };
  }

  private async fillActionTypes(): Promise<any> {
    for (const action of defaultActions) {
      await this.api.create("actionTypes", action);
    }
    return null;
  }

  private async fillWorkTypes(): Promise<any> {
    for (const work of defaultWorks) {
      await this.api.create("workTypes", work);
    }
    return null;
  }

  private async fillStatusTypes(): Promise<any> {
    for (const status of defaultStatus) {
      await this.api.create("statusTypes", status);
    }
    return null;
  }
}
