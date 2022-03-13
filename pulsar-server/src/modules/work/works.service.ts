import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { Work } from "./work.interface";

const MAX_WORKS = 15;

@Injectable()
export class WorksService {
  constructor(private api: ApiService) {}

  private async clearWorks(works) {
    const result = [...works];
    const different = works.length - MAX_WORKS;
    if (different > 0) {
      for (let i = 0; i < different; i++) {
        await this.delete(works[i].id);
        result.shift();
      }
    }
    return result;
  }

  async getAll(): Promise<any> {
    let works = await this.api.getAll("works");
    works = await this.clearWorks(works);
    return works;
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
