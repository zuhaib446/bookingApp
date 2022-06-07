import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotels/hotel.module';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './rooms/room.module';
import { FileUploadModule } from './file-upload/file-upload.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    HotelModule,
    RoomModule,
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
