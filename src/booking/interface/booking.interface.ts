import { HotelInterface } from "src/hotels/interface/hotel.interface";
import { RoomInterface } from "src/rooms/interface/room.interface";
import { UserInterface } from "src/user/interface/user.interface";

export interface BookingInterface {
    user: UserInterface;
    room: RoomInterface;
    hotel: HotelInterface;
    startDate: Date;
    endDate: Date;
    price: number;
    status: string;
    persons: number;
    extraBed: boolean;
}