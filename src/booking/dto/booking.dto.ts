import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class BookingDto {
    @IsString()
    @IsNotEmpty()
    roomId: string;

    @IsNotEmpty()
    checkIn: Date;

    @IsNotEmpty()
    checkOut: Date;

    @IsNotEmpty()
    @IsNumber()
    persons: number;

    @IsBoolean()
    @IsOptional()
    extraBed?: boolean;
}