import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig, Schema as MSchema } from 'mongoose';
import { UserInterface } from 'src/user/interface/user.interface';
import { SeatBookingInterface, TicketType } from '../interface/seatBooking.interface';

export type SeatBookingDocument = Document & SchemaTimestampsConfig;
@Schema({ timestamps: true })
export class SeatBooking implements SeatBookingInterface {
    @Prop()
    seatNumber: number;

    @Prop()
    from: string;

    @Prop()
    to: string;

    @Prop()
    ticketType: TicketType;

    @Prop()
    departureTime: string;

    @Prop()
    departureDate: string;

    @Prop()
    totalPrice: number;

    @Prop()
    totalPersons: number;

    @Prop({ type: MSchema.Types.ObjectId, ref: 'User' })
    user: UserInterface;
}

export const SeatBookingSchema = SchemaFactory.createForClass(SeatBooking);