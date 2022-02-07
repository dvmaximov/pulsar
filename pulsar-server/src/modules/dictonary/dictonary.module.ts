import { Module } from "@nestjs/common";

import { DictonaryController } from "./dictonary.controller";
import { DictonaryService } from "./dictonary.service";

@Module({
  controllers: [DictonaryController],
  providers: [DictonaryService],
})
export class DictonaryModule {}
