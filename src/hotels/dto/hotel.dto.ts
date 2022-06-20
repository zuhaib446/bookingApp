
import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class HotelDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
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
}