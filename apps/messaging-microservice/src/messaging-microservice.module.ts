import { Module } from '@nestjs/common';
import { MessagingMicroserviceController } from './messaging-microservice.controller';
import { MessagingMicroserviceService } from './messaging-microservice.service';

@Module({
  imports: [],
  controllers: [MessagingMicroserviceController],
  providers: [MessagingMicroserviceService],
})
export class MessagingMicroserviceModule {}
