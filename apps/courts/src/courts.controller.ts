import { Controller, Get } from '@nestjs/common';
import { CourtsService } from './courts.service';

@Controller()
export class CourtsController {
  constructor(private readonly courtsService: CourtsService) {}

  @Get()
  getHello(): string {
    return this.courtsService.getHello();
  }
}
