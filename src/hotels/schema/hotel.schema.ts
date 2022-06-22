import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig, Schema as MSchema } from 'mongoose';
import { RoomInterface } from 'src/rooms/interface/room.interface';
import { UserInterface } from 'src/user/interface/user.interface';
import { HotelInterface } from '../interface/hotel.interface';

export type HotelDocument = Document & SchemaTimestampsConfig;

@Schema({ timestamps: true })
export class Hotel implements HotelInterface {

    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    description: string;

    @Prop()
    stars: number;

    @Prop()
    services: string[];

    @Prop()
    reviews: string[];

    @Prop()
    image: string;

    @Prop({ type: { type: MSchema.Types.ObjectId, ref: 'User' } })
    user: UserInterface

    @Prop({ type: [{ type: MSchema.Types.ObjectId, ref: 'Room' }] })
    rooms: RoomInterface[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);

