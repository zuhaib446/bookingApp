import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomInterface } from './interface/room.interface';
import { Room } from './schema/room.schema';
import { RoomsDto } from './dto/rooms.dto';
import { Hotel } from 'src/hotels/schema/hotel.schema';
import { HotelInterface } from 'src/hotels/interface/hotel.interface';

@Injectable()
export class RoomService {
    constructor(
        @InjectModel(Room.name) private readonly roomModel: Model<RoomInterface>,
        @InjectModel(Hotel.name) private readonly hotelModel: Model<HotelInterface>,
    ) { }

    async create(roomsDto: RoomsDto): Promise<RoomInterface> {
        try {
            const createdRoom = new this.roomModel(roomsDto);
            const hotel = await this.hotelModel.findById(roomsDto.hotelId);
            hotel.rooms.push(createdRoom._id as any);
            await hotel.save();
            await createdRoom.save();
            return createdRoom;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findAll(): Promise<RoomInterface[]> {
        try {
            return await this.roomModel.find();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findOne(id: string): Promise<RoomInterface> {
        try {
            return await this.roomModel.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id: string, roomsDto: RoomsDto): Promise<RoomInterface> {
        try {
            return await this.roomModel.findByIdAndUpdate(id, roomsDto, { new: true });
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: string): Promise<RoomInterface> {
        try {
            return await this.roomModel.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    }

}
