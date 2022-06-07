import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HotelInterface } from './interface/hotel.interface';
import { HotelDto } from './dto/hotel.dto';
import { HotelSchema } from './schema/hotel.schema';


@Injectable()
export class HotelService {
    constructor(@InjectModel(HotelSchema.name) private readonly hotelModel: Model<HotelInterface>) { }

    async create(hotelDto: HotelDto): Promise<HotelInterface> {
        try {
            const createdHotel = new this.hotelModel(hotelDto);
            return await createdHotel.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findAll(): Promise<HotelInterface[]> {
        try {
            return await this.hotelModel.find();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findOne(id: string): Promise<HotelInterface> {
        try {
            return await this.hotelModel.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id: string, hotelDto: HotelDto): Promise<HotelInterface> {
        try {
            return await this.hotelModel.findByIdAndUpdate(id, hotelDto, { new: true });
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: string): Promise<HotelInterface> {
        try {
            return await this.hotelModel.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findByName(name: string): Promise<HotelInterface> {
        try {
            return await this.hotelModel.findOne({ name: name });
        } catch (error) {
            throw new Error(error);
        }
    }

}
