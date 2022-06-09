
import { IsString, IsNotEmpty, IsNumber, IsEmail, MinLength, MaxLength } from 'class-validator';

export class HotelDto {
    @IsString()
    @IsNotEmpty({
        message: 'Name is required',
    })
    name: string;

    @IsString()
    @IsNotEmpty({})
    address: string;

    @IsString()
    phone: string;

    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    description: string;

    @IsNumber()
    stars: number;

    @IsString()
    services: string[];

    @IsString()
    reviews: string[];

    @IsString()
    image: string;
    //  rooms: RoomInterface[];
}