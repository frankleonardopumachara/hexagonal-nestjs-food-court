import { NestFactory } from '@nestjs/core';
import { CourtsModule } from './courts.module';

async function bootstrap() {
  const app = await NestFactory.create(CourtsModule);
  await app.listen(3000);
}
bootstrap();
