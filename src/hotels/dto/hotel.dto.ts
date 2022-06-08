
import { IsString, IsNotEmpty, IsNumber, IsEmail, MinLength } from 'class-validator';

export class HotelDto {
    @IsString()
    @IsNotEmpty({ message: 'Hotel name is required' })
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(10, { message: 'Description must be at least 10 characters long' })
    description: string;

    @IsString()
    logo: string;

    @IsNumber()
    stars: number;

    @IsNumber()
    location: {
        lat: number,
        lng: number
    };

    @IsString()
    services: string[];

    @IsString()
    reviews: string[];

    @IsString()
    image: string;
}