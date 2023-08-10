import { NestFactory } from '@nestjs/core';
import { FoodCourtMicroserviceModule } from './food-court-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(FoodCourtMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
