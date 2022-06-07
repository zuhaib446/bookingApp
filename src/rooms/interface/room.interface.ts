import { Document } from 'mongoose';

export interface RoomInterface extends Document {
    currency: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    roomDescription: string;
    roomPrice: string;
    roomImage: string;
}
