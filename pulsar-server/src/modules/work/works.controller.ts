import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";

import { WorksService } from "./works.service";

@Controller("works")
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Get()
  async getAll(): Promise<any> {
    return this.worksService.getAll();
  }

  @Post()
  async create(@Body() work: any) {
    return await this.worksService.create(work);
  }

  @Delete(":id")
  async delete(@Param("id") id): Promise<any> {
    return await this.worksService.delete(id);
  }
}
