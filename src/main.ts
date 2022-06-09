import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: true,
  }));

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [
      AppModule,
    ],
  });
  SwaggerModule.setup('api', app, document);
  app.use(helmet());
  await app.listen(3000, () => {
    console.log('Listening on port 3000');
    console.log('http://localhost:3000/api');
  }
  );
}
bootstrap();
