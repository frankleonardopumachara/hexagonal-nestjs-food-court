import { Test, TestingModule } from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

describe('UsersMicroserviceController', () => {
  let usersMicroserviceController: UsersController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile()

    usersMicroserviceController = app.get<UsersController>(
      UsersController,
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(usersMicroserviceController.getHello()).toBe('Hello World!')
    })
  })
})
