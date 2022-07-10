import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export type VehicleDetails = {
    totalSeats: number;
    vehicalNumber: string;
    vehicalPrice: number;
    departureTime: string;
}

export class ServicesDto {
    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
    serviceName: string;

    @IsNumber()
    totalVehicles: number;

    @IsString()
    @IsNotEmpty()
    servicesInCity: string[];

    @IsString()
    @IsNotEmpty()
    vehicleType: string | string[];

    @IsNotEmpty()
    vehicleDetails: {
        totalSeats: number;
        vehicalNumber: string;
        vehicalPrice: number;
        departureTime: string;
    };
}