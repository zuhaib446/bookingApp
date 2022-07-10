import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesSchema } from 'src/services/schema/services.schema';
import { UserSchema } from 'src/user/schema/user.schema';
import { SeatBookingSchema } from './schema/seat-booking.schema';
import { SeatBookingController } from './seat-booking.controller';
import { SeatBookingService } from './seat-booking.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Services', schema: ServicesSchema },
      { name: 'SeatBooking', schema: SeatBookingSchema },
    ]),
  ],
  controllers: [SeatBookingController],
  providers: [SeatBookingService]
})
export class SeatBookingModule { }
