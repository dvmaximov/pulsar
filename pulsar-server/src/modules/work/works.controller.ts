import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
} from "@nestjs/common";
import { Request } from "express";
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

  @Get("/stopCurrent")
  stopCurrentWork(): Promise<any> {
    this.runner.stopAll().catch(() => ({}));
    return null;
  }

  @Get("/currentWork")
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

  @Get("/calibrateAzimuth")
  async calibrateAzimuth(@Req() request: Request): Promise<any> {
    return this.runner.calibrateAzimuth(+request.query["time"]);
  }

  @Get("/calibrateSlope")
  async calibrateSlope(@Req() request: Request): Promise<any> {
    return this.runner.calibrateSlope(+request.query["time"]);
  }

  @Delete(":id")
  async delete(@Param("id") id): Promise<any> {
    const deleted = await this.worksService.delete(id);
    this.runner.removeWork(id);
    return deleted;
  }
}
