import { Controller, Get } from '@nestjs/common';
import { FoodCourtMicroserviceService } from './food-court-microservice.service';

@Controller()
export class FoodCourtMicroserviceController {
  constructor(private readonly foodCourtMicroserviceService: FoodCourtMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.foodCourtMicroserviceService.getHello();
  }
}
