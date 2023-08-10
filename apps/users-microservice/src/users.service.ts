import { Injectable } from '@nestjs/common'
import { CreateOwnerDto } from './dtos/create-owner.dto'
import { OwnerCreatedDto } from './dtos/owner-created.dto'

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World!'
  }

  createOwner(dto: CreateOwnerDto): OwnerCreatedDto {
    return {
      createdAt: '',
      firstName: '',
      lastName: '',
    }
  }
}
