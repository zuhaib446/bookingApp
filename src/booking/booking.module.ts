import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from 'src/hotels/schema/hotel.schema';
import { RoomSchema } from 'src/rooms/schema/room.schema';
import { UserSchema } from 'src/user/schema/user.schema';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingSchema } from './schema/booking.scheam';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Booking', schema: BookingSchema },
      { name: 'Hotel', schema: HotelSchema },
      { name: 'Room', schema: RoomSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule { }
