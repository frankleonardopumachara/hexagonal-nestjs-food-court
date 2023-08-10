import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secreto',
      database: 'food-court-users-db',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
