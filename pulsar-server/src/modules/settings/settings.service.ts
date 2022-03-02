import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { defaultSettings } from "./data/settings.data";

@Injectable()
export class SettingsService {
  constructor(private api: ApiService) {}

  async getAll(): Promise<any> {
    let settings = await this.api.getAll("settings");
    if (settings.length === 0) {
      await this.fillSettings();
      settings = await this.api.getAll("settings");
    }
    return settings;
  }

  async getById(id: number): Promise<any> {
    return await this.api.getById("settings", id);
  }

  async update(id: number, value: unknown): Promise<any> {
    return this.api.update("settings", id, value);
  }

  private async fillSettings(): Promise<any> {
    for (const setting of defaultSettings) {
      await this.api.create("settings", setting);
    }
    return null;
  }
}
