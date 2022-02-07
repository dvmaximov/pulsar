import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { Task } from "./task.interface";

@Injectable()
export class TasksService {
  constructor(private api: ApiService) {}

  async getAll(): Promise<Task[]> {
    return await this.api.getAll("tasks");
  }

  async create(task: Task): Promise<Task> {
    return await this.api.create("tasks", task);
  }

  async update(id: number, task: Task): Promise<Task> {
    return await this.api.update("tasks", id, task);
  }

  async delete(id: any): Promise<any> {
    let result = { removed: 1, error: "" };
    try {
      await this.api.delete("tasks", id);
    } catch (e) {
      result = { removed: 0, error: e };
    }
    return result;
  }

  // async getAllActions(taskId: number): Promise<TaskAction[]> {
  //   return await this.taskActionRepository.find({ taskId });
  // }

  // async createAction(action: TaskAction): Promise<TaskAction> {
  //   return await this.taskActionRepository.save(action);
  // }

  // async updateAction(action: TaskAction): Promise<UpdateResult> {
  //   return await this.taskActionRepository.update(action.id, action);
  // }

  // async deleteAction(id: any): Promise<DeleteResult> {
  //   return await this.taskActionRepository.delete(id);
  // }

  // async deleteAllAction(taskId: number): Promise<DeleteResult> {
  //   return await this.taskActionRepository.delete({ taskId });
  // }
}
