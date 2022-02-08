import { Injectable } from "@nestjs/common";

import { ApiService } from "../api/api.service";
import { ActionType } from "./actionType.interface";
import { defaultActions } from "./actions.data";

@Injectable()
export class DictonaryService {
  constructor(private api: ApiService) {}

  async getAll(): Promise<any> {
    let actionTypes = await this.api.getAll("actionType");
    if (actionTypes.length === 0) {
      await this.fillActionType();
      actionTypes = await this.api.getAll("actionType");
    }
    return { actionTypes };
  }

  private async create(action: any): Promise<any> {
    await this.api.create("actionType", action);
  }

  private async fillActionType(): Promise<any> {
    for (const action of defaultActions) {
      await this.create(action);
    }
    return null;
  }
}
