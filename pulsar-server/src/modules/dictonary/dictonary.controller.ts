import { Controller, Get } from "@nestjs/common";

import { Dictonary } from "./dictonary.interface";
import { DictonaryService } from "./dictonary.service";

@Controller("dictonary")
export class DictonaryController {
  constructor(private readonly dictonaryService: DictonaryService) {}

  @Get()
  index(): Promise<Dictonary> {
    return this.dictonaryService.getAll();
  }
}
