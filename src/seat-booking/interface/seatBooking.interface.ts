import { UserInterface } from "src/user/interface/user.interface";

export enum TicketType {
    BusTicket = 'BusTicket',
    carTicket = 'carTicket',
    VanTicket = 'VanTicket',
    CoasterTicket = 'CoasterTicket'
}

export interface SeatBookingInterface {
    user: UserInterface;
    seatNumber: number;
    from: string;
    to: string;
    ticketType: TicketType;
    departureTime: string;
    departureDate: string;
    totalPrice: number;
    totalPersons: number;
}