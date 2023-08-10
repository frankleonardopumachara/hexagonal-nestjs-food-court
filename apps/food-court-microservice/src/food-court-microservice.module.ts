import { Module } from '@nestjs/common';
import { FoodCourtMicroserviceController } from './food-court-microservice.controller';
import { FoodCourtMicroserviceService } from './food-court-microservice.service';

@Module({
  imports: [],
  controllers: [FoodCourtMicroserviceController],
  providers: [FoodCourtMicroserviceService],
})
export class FoodCourtMicroserviceModule {}
