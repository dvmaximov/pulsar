import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { Work } from "./work.interface";
import { ApiResult } from "../api/api.interface";

const MAX_WORKS = 15;

@Injectable()
export class WorksService {
  constructor(private api: ApiService) {}

  private async clearWorks(works): Promise<Array<Work>> {
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

  async getAll(): Promise<ApiResult> {
    const answer: ApiResult = await this.api.getAll("works");
    try {
      answer.result = await this.clearWorks(answer.result);
    } catch (e) {
      answer.result = null;
      answer.error = e;
    }

    return answer;
  }

  async getCurrentWork(): Promise<ApiResult> {
    return await this.api.getAll("currentWork");
  }

  async create(work: Work): Promise<ApiResult> {
    return await this.api.create("works", work);
  }

  async update(id: number, work: Work): Promise<ApiResult> {
    return await this.api.update("works", id, work);
  }

  async delete(id: any): Promise<ApiResult> {
    return await this.api.delete("works", id);
  }
}
