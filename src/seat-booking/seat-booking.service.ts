import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SeatBookingInterface } from './interface/seatBooking.interface';
@Injectable()
export class SeatBookingService {
    constructor(@InjectModel('SeatBooking') private readonly seatBookingModel: Model<SeatBookingInterface>) { }

    async create(seatBooking: SeatBookingInterface): Promise<SeatBookingInterface> {
        const createdSeatBooking = new this.seatBookingModel(seatBooking);
        return await createdSeatBooking.save();
    }

    async findAll(): Promise<SeatBookingInterface[]> {
        return await this.seatBookingModel.find().exec();
    }
    async findOne(id: string): Promise<SeatBookingInterface> {
        return await this.seatBookingModel.findById(id).exec();
    }
    async delete(id: string): Promise<SeatBookingInterface> {
        return await this.seatBookingModel.findByIdAndRemove(id).exec();
    }
}
