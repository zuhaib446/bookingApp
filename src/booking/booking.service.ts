import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookingInterface } from './interface/booking.interface';
import { BookingDto } from './dto/booking.dto';
import { Booking } from './schema/booking.scheam';
import { RoomInterface } from 'src/rooms/interface/room.interface';
import * as dayjs from 'dayjs'

@Injectable()
export class BookingService {
    constructor(
        @InjectModel(Booking.name) private readonly bookingModel: Model<BookingInterface>,
        @InjectModel('Room') private readonly roomModel: Model<RoomInterface>
    ) { }

    async create(userID: string, bookingDto: BookingDto): Promise<BookingInterface> {
        try {
            const findRoom = await this.roomModel.findOne({ room: bookingDto.roomId });
            if (findRoom) {
                const { roomPrice, maxPeople } = findRoom
                const { persons, checkIn, checkOut } = bookingDto
                // total person is greater than max people
                if (persons > maxPeople) {
                    throw new Error('Max people is ' + maxPeople)
                }
                // total days
                const totalDays = dayjs(checkOut).diff(dayjs(checkIn), 'day')
                // total price
                const totalPrice = roomPrice * totalDays
                const createdBooking = new this.bookingModel({
                    ...bookingDto,
                    total: totalPrice,
                    user: userID
                });
                return await createdBooking.save();
            }
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
