import { Injectable } from '@nestjs/common';

@Injectable()
export class CourtsService {
  getHello(): string {
    return 'Hello World!';
  }
}
