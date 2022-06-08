import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from './schema/hotel.schema';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Hotel', schema: HotelSchema }
        ]),
    ],
    controllers: [HotelController],
    providers: [HotelService],
})
export class HotelModule { }
