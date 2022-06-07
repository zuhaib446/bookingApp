import {
    IsNotEmpty,
    IsString,
    IsNumber,
} from 'class-validator';

export class RoomsDto {
    @IsString()
    @IsNotEmpty()
    currency: string;

    @IsString()
    @IsNotEmpty()
    checkIn: string;

    @IsString()
    @IsNotEmpty()
    checkOut: string;

    @IsString()
    @IsNotEmpty()
    roomType: string;

    @IsString()
    @IsNotEmpty()
    roomDescription: string;

    @IsNumber()
    @IsNotEmpty()
    roomPrice: string;
}