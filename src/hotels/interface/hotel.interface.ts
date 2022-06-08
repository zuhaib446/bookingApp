import { RoomInterface } from '../../rooms/interface/room.interface';
export interface HotelInterface {
    name: string;
    address: string;
    phone: string;
    email: string;
    description: string;
    logo: string;
    stars: number;
    services: string[];
    reviews: string[];
    image: string;
    rooms: RoomInterface[];
}