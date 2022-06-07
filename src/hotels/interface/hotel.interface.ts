import { Document } from 'mongoose';
import { RoomInterface } from '../../rooms/interface/room.interface';

export interface HotelInterface extends Document {
    name: string;
    address: string;
    phone: string;
    email: string;
    description: string;
    image: string;
    rooms: RoomInterface[];
}