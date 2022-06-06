import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB_URL), HotelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
