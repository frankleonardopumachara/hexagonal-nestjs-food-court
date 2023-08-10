import { Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateOwnerDto } from './dtos/create-owner.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello()
  }

  @Post('owner')
  createOwner(dto: CreateOwnerDto) {
    this.usersService.createOwner(dto)
  }
}
