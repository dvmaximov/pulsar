import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from "@nestjs/common";

import { Task } from "./task.interface";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async index(): Promise<Task[]> {
    const tasks = await this.tasksService.getAll();
    return tasks;
  }

  @Get(":id")
  async getById(@Param("id") id): Promise<Task[]> {
    const tasks = await this.tasksService.getById(id);
    return tasks;
  }

  @Post()
  async create(@Body() task: any) {
    return await this.tasksService.create(task);
  }

  @Put(":id")
  async update(@Param("id") id, @Body() task: Task): Promise<any> {
    return this.tasksService.update(id, task);
  }

  @Delete(":id")
  async delete(@Param("id") id): Promise<any> {
    return await this.tasksService.delete(id);
  }

  // @Get(":taskId")
  // async actions(@Param("taskId") taskId): Promise<TaskAction[]> {
  //   return this.tasksService.getAllActions(taskId);
  // }

  // @Post(":taskId/create")
  // async createAction(@Body() action: TaskAction) {
  //   return await this.tasksService.createAction(action);
  // }

  // @Put(":taskId/update/:id")
  // async updateAction(
  //   @Param("id") id,
  //   @Body() action: TaskAction,
  // ): Promise<any> {
  //   return this.tasksService.updateAction(action);
  // }

  // @Delete(":taskId/delete/:id")
  // async deleteAction(@Param("id") id): Promise<any> {
  //   return this.tasksService.deleteAction(id);
  // }
}
