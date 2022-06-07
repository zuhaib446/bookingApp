import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoomInterface } from '../interface/room.interface';

export type RoomDocument = Document & Room & RoomInterface;

@Schema({ timestamps: true })
export class Room {
    @Prop()
    currency: string;

    @Prop()
    checkIn: string;

    @Prop()
    checkOut: string;

    @Prop()
    roomType: string;

    @Prop()
    roomDescription: string;

    @Prop()
    roomPrice: string;

    @Prop()
    roomImage: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);