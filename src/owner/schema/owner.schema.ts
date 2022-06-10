import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig, Schema as MSchema } from 'mongoose';
import { OwnerInterface } from '../interface/owner.interface';

export type OwnerDocument = Document & SchemaTimestampsConfig;
@Schema({ timestamps: true })
export class Owner implements OwnerInterface {

    @Prop({ type: { type: MSchema.Types.ObjectId, ref: 'Hotel' } })
    hotelId: string;

    @Prop({ type: [{ type: MSchema.Types.ObjectId, ref: 'Room' }] })
    roomId: [string];

    @Prop()
    resrvationId: [string];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);