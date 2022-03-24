/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Controller,
  Get,
  Put,
  Post,
  Param,
  Body,
  Response,
  StreamableFile,
} from "@nestjs/common";
import { createReadStream } from "fs";
import { ApiResult } from "../api/api.interface";
import { Setting } from "./settings.interface";
import { SettingsService } from "./settings.service";

@Controller("api/settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getAll(): Promise<any> {
    return this.settingsService.getAll();
  }

  @Get("/updateServer")
  updateServer(): Promise<any> {
    return this.settingsService.updateServer().catch(() => {});
  }

  @Get("/backup")
  backup(@Response({ passthrough: true }) res): StreamableFile {
    const backup = this.settingsService.backup(); //.catch(() => {});
    const file = createReadStream(backup.dist);
    res.set({
      "Content-Type": "application/json",
      filename: "dsfs",
      "Content-Disposition": `attachment; filename="${backup.fileName}"`,
    });
    return new StreamableFile(file);
  }

  @Post("/restore")
  async restore(@Body() value: any): Promise<ApiResult> {
    return await this.settingsService.restore(value);
  }

  @Get("/serverTime")
  serverTime(): Promise<any> {
    return this.settingsService.serverTime();
  }

  @Get("/shutdown")
  shutdown(): Promise<any> {
    return this.settingsService.shutdown().catch(() => {});
  }

  @Put(":id")
  async update(@Param("id") id, @Body() setting: Setting): Promise<any> {
    return this.settingsService.update(id, setting);
  }
}
