import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookingInterface } from './interface/booking.interface';
import { BookingDto } from './dto/booking.dto';
import { Booking } from './schema/booking.scheam';

@Injectable()
export class BookingService {
    constructor(
        @InjectModel(Booking.name) private readonly bookingModel: Model<BookingInterface>
    ) { }

    async create(bookingDto: BookingDto): Promise<BookingInterface> {
        try {
            const createdBooking = new this.bookingModel(bookingDto);
            return await createdBooking.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findAll(): Promise<BookingInterface[]> {
        try {
            return await this.bookingModel.find();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findOne(id: string): Promise<BookingInterface> {
        try {
            return await this.bookingModel.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id: string, bookingDto: BookingDto): Promise<BookingInterface> {
        try {
            return await this.bookingModel.findByIdAndUpdate(id, bookingDto, { new: true });
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: string): Promise<BookingInterface> {
        try {
            return await this.bookingModel.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    }
}
