import { Controller, Get, Put, Param, Body } from "@nestjs/common";
import { Setting } from "./settings.interface";
import { SettingsService } from "./settings.service";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getAll(): Promise<any> {
    return this.settingsService.getAll();
  }

  @Get("/updateServer")
  updateServer(): Promise<any> {
    return this.settingsService.updateServer();
  }

  @Put(":id")
  async update(@Param("id") id, @Body() setting: Setting): Promise<any> {
    return this.settingsService.update(id, setting);
  }
}
