import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomInterface } from './interface/room.interface';
import { RoomSchema } from './schema/room.schema';
import { RoomsDto } from './dto/rooms.dto';

@Injectable()
export class RoomService {
    constructor(@InjectModel(RoomSchema.name) private readonly roomModel: Model<RoomInterface>) { }

    async create(roomsDto: RoomsDto): Promise<RoomInterface> {
        try {
            const createdRoom = new this.roomModel(roomsDto);
            return await createdRoom.save();
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
