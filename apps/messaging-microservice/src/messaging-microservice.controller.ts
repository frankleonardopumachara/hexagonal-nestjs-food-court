import { Controller, Get } from '@nestjs/common';
import { MessagingMicroserviceService } from './messaging-microservice.service';

@Controller()
export class MessagingMicroserviceController {
  constructor(private readonly messagingMicroserviceService: MessagingMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.messagingMicroserviceService.getHello();
  }
}
