import {
    IsNotEmpty,
    IsString,
    IsNumber,
} from 'class-validator';

export class RoomsDto {
    @IsString()
    @IsNotEmpty()
    checkIn: string;

    @IsString()
    @IsNotEmpty()
    checkOut: string;

    @IsString()
    roomType: string;

    @IsString()
    roomDescription: string;

    @IsNumber()
    @IsNotEmpty()
    roomPrice: number;

    @IsString()
    roomImages: [string];

    @IsNumber()
    maxPeople: number;
}