import { Test, TestingModule } from '@nestjs/testing';
import { FoodCourtMicroserviceController } from './food-court-microservice.controller';
import { FoodCourtMicroserviceService } from './food-court-microservice.service';

describe('FoodCourtMicroserviceController', () => {
  let foodCourtMicroserviceController: FoodCourtMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FoodCourtMicroserviceController],
      providers: [FoodCourtMicroserviceService],
    }).compile();

    foodCourtMicroserviceController = app.get<FoodCourtMicroserviceController>(FoodCourtMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(foodCourtMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
