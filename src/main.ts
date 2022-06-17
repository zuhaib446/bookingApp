import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { UserModule } from './user/user.module';
import { HotelModule } from './hotels/hotel.module';
import { RoomModule } from './rooms/room.module';
import { BookingModule } from './booking/booking.module';
import { AdminModule } from './admin/admin.module';


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
      UserModule,
      HotelModule,
      RoomModule,
      BookingModule,
      AdminModule,
    ],
  });
  SwaggerModule.setup('api/swagger', app, document);
  app.use(helmet());
  await app.listen(3000, () => {
    console.log('Listening on port 3000');
    console.log('http://localhost:3000/api/swagger');
  }
  );
}
bootstrap();
