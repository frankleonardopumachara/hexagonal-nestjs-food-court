import { NestFactory } from '@nestjs/core';
import { TraceabilityMicroserviceModule } from './traceability-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(TraceabilityMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
