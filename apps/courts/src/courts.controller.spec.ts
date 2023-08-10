import { Test, TestingModule } from '@nestjs/testing';
import { CourtsController } from './courts.controller';
import { CourtsService } from './courts.service';

describe('CourtsController', () => {
  let courtsController: CourtsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CourtsController],
      providers: [CourtsService],
    }).compile();

    courtsController = app.get<CourtsController>(CourtsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(courtsController.getHello()).toBe('Hello World!');
    });
  });
});
