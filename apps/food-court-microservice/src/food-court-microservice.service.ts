import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodCourtMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
