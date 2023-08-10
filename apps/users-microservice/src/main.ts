import { NestFactory } from '@nestjs/core'
import { UsersModule } from './users.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(UsersModule)

  const config = new DocumentBuilder()
    .setTitle('Users Service')
    .setDescription('Users service')
    .setVersion('1.0')
    .addTag('users')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}

bootstrap()
