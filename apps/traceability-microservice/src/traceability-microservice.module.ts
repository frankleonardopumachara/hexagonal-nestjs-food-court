import { Module } from '@nestjs/common';
import { TraceabilityMicroserviceController } from './traceability-microservice.controller';
import { TraceabilityMicroserviceService } from './traceability-microservice.service';

@Module({
  imports: [],
  controllers: [TraceabilityMicroserviceController],
  providers: [TraceabilityMicroserviceService],
})
export class TraceabilityMicroserviceModule {}
