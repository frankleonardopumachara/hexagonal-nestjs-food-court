import { Module } from '@nestjs/common';
import { CourtsController } from './courts.controller';
import { CourtsService } from './courts.service';

@Module({
  imports: [],
  controllers: [CourtsController],
  providers: [CourtsService],
})
export class CourtsModule {}
