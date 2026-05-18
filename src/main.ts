import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // swagger config
  // 1. config
  // 2. create document
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('NestJS API description')
    .setTermsOfService('https://www.google.com')
    .addServer('http://localhost:3000', 'Local')
    .addServer('https://api.example.com', 'Production')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
