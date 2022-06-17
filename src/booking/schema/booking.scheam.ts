import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig, Schema as MSchema } from 'mongoose';
import { RoomInterface } from 'src/rooms/interface/room.interface';
import { HotelInterface } from 'src/hotels/interface/hotel.interface';
import { BookingInterface } from '../interface/booking.interface';
import { UserInterface } from 'src/user/interface/user.interface';


export type BookingDocument = Document & SchemaTimestampsConfig;

@Schema({ timestamps: true })
export class Booking implements BookingInterface {

    @Prop({ type: MSchema.Types.ObjectId, ref: 'User' })
    user: UserInterface;

    @Prop({ type: MSchema.Types.ObjectId, ref: 'Room' })
    room: RoomInterface

    @Prop({ type: MSchema.Types.ObjectId, ref: 'Hotel' })
    hotel: HotelInterface;

    @Prop({ type: Date })
    checkIn: Date;

    @Prop({ type: Date })
    checkOut: Date;

    @Prop()
    price: number;

    @Prop({ enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' })
    status: string;

    @Prop()
    persons: number;

    @Prop({ default: false })
    extraBed: boolean;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
