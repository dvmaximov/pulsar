import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { Work } from "./work.interface";

import { WorksService } from "./works.service";
import { RunnerService } from "./runner.service";

@Controller("works")
export class WorksController {
  constructor(
    private readonly worksService: WorksService,
    private readonly runner: RunnerService,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return this.worksService.getAll();
  }

  @Get("/stop-current")
  async stopCurrentWork(): Promise<any> {
    return this.runner.stopAll();
  }

  @Get("/current-work")
  async getCurrentWork(): Promise<any> {
    return this.worksService.getCurrentWork();
  }

  @Post()
  async create(@Body() work: any): Promise<Work> {
    const created: Work = await this.worksService.create(work);
    this.runner.addWork(created);
    return created;
  }

  @Put(":id")
  async update(@Param("id") id, @Body() work: Work): Promise<any> {
    return this.worksService.update(id, work);
  }

  @Delete(":id")
  async delete(@Param("id") id): Promise<any> {
    const deleted = await this.worksService.delete(id);
    this.runner.removeWork(id);
    return deleted;
  }
}
