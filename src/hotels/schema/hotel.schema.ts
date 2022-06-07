import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HotelInterface } from '../interface/hotel.interface';

export type HotelDocument = Document & Hotel & HotelInterface;

@Schema({ timestamps: true })
export class Hotel {
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
    image: string;

}

export const HotelSchema = SchemaFactory.createForClass(Hotel);