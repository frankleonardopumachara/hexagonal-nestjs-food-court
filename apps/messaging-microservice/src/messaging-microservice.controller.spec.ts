import { Test, TestingModule } from '@nestjs/testing';
import { MessagingMicroserviceController } from './messaging-microservice.controller';
import { MessagingMicroserviceService } from './messaging-microservice.service';

describe('MessagingMicroserviceController', () => {
  let messagingMicroserviceController: MessagingMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessagingMicroserviceController],
      providers: [MessagingMicroserviceService],
    }).compile();

    messagingMicroserviceController = app.get<MessagingMicroserviceController>(MessagingMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(messagingMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
