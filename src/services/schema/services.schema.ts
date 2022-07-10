import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig, Schema as MSchema } from 'mongoose';
import { ServicesInterface, VehicleType, VehicleDetailsInterface } from '../interface/services.interface';

@Schema({ timestamps: true })
export class VehicleDetail implements VehicleDetailsInterface {
    @Prop()
    totalSeats: number;

    @Prop()
    vehicalNumber: string;

    @Prop()
    vehicalPrice: number;

    @Prop()
    departureTime: string;
}

export const VehicleDetailsSchema = SchemaFactory.createForClass(VehicleDetail);

export type VehicleDetailsDocument = SchemaTimestampsConfig & Document;
export type ServicesDocument = Document & SchemaTimestampsConfig;


@Schema({ timestamps: true })
export class Services implements ServicesInterface {
    @Prop({ type: MSchema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop()
    serviceName: string;

    @Prop()
    totalVehicles: number;

    @Prop()
    servicesInCity: string[];

    @Prop({ type: { default: '' } })
    vehicleType: VehicleType | VehicleType[];

    @Prop({
        type: [{
            type: VehicleDetailsSchema, ref: 'VehicleDetail'
        }]
    })
    vehicleDetails: VehicleDetailsInterface[] | VehicleDetailsInterface;

}

export const ServicesSchema = SchemaFactory.createForClass(Services);

