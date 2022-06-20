import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RoomsDto {
    @IsString()
    @IsNotEmpty()
    hotelId: string;

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