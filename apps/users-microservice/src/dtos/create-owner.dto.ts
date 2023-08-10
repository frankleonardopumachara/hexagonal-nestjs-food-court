import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateOwnerDto {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  firstName: string

  @ApiProperty()
  @IsString()
  lastName: string
}
