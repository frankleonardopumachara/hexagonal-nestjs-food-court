import { Injectable } from '@nestjs/common';

@Injectable()
export class TraceabilityMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
