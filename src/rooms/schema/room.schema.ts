import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoomInterface } from '../interface/room.interface';

export type RoomDocument = Document & RoomInterface;

@Schema({ timestamps: true })
export class RoomSchema {
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

export const Room = SchemaFactory.createForClass(RoomSchema);
export default Room;