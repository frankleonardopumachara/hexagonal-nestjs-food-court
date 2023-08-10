import { Test, TestingModule } from '@nestjs/testing';
import { TraceabilityMicroserviceController } from './traceability-microservice.controller';
import { TraceabilityMicroserviceService } from './traceability-microservice.service';

describe('TraceabilityMicroserviceController', () => {
  let traceabilityMicroserviceController: TraceabilityMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TraceabilityMicroserviceController],
      providers: [TraceabilityMicroserviceService],
    }).compile();

    traceabilityMicroserviceController = app.get<TraceabilityMicroserviceController>(TraceabilityMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(traceabilityMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
