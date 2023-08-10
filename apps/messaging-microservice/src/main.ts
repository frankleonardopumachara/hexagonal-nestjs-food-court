import { NestFactory } from '@nestjs/core';
import { MessagingMicroserviceModule } from './messaging-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagingMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
