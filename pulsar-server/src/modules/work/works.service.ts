import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { Work } from "./work.interface";

@Injectable()
export class WorksService {
  constructor(private api: ApiService) {}

  async getAll(): Promise<any> {
    return await this.api.getAll("works");
  }

  async getCurrentWork(): Promise<any> {
    return await this.api.getAll("currentWork");
  }

  async create(work: Work): Promise<Work> {
    return await this.api.create("works", work);
  }

  async update(id: number, work: Work): Promise<Work> {
    return await this.api.update("works", id, work);
  }

  async delete(id: any): Promise<any> {
    let result = { removed: 1, error: "" };
    try {
      await this.api.delete("works", id);
    } catch (e) {
      result = { removed: 0, error: e };
    }
    return result;
  }
}
