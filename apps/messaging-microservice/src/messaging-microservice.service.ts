import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagingMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
