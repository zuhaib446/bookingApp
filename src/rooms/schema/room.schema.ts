import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig } from 'mongoose';
import { RoomInterface } from '../interface/room.interface';

export type RoomDocument = Document & SchemaTimestampsConfig;

@Schema({ timestamps: true })
export class Room implements RoomInterface {
    @Prop()
    checkIn: string;

    @Prop()
    checkOut: string;

    @Prop()
    roomType: string;

    @Prop()
    roomDescription: string;

    @Prop()
    roomPrice: number;

    @Prop()
    roomImages: [string];

    @Prop()
    maxPeople: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);