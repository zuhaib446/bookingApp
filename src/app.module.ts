import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotels/hotel.module';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './rooms/room.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { AdminModule } from './admin/admin.module';
import { SeatBookingModule } from './seat-booking/seat-booking.module';
import { ServicesModule } from './services/services.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    HotelModule,
    RoomModule,
    UserModule,
    AuthModule,
    BookingModule,
    AdminModule,
    SeatBookingModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
