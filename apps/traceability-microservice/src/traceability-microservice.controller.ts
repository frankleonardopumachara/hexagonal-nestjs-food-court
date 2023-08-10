import { Controller, Get } from '@nestjs/common';
import { TraceabilityMicroserviceService } from './traceability-microservice.service';

@Controller()
export class TraceabilityMicroserviceController {
  constructor(private readonly traceabilityMicroserviceService: TraceabilityMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.traceabilityMicroserviceService.getHello();
  }
}
