
export enum VehicleType {
    Bus = 'BUS',
    Car = 'CAR',
    Van = 'VAN',
    Coaster = 'COASTER',
}


export interface ServicesInterface {
    user: string;
    serviceName: string;
    totalVehicles: number;
    servicesInCity: string[];
    vehicleType: VehicleType | VehicleType[];
    vehicleDetails: VehicleDetailsInterface[] | VehicleDetailsInterface;
}
// ARRAY OF OBJECTS

export interface VehicleDetailsInterface {
    totalSeats: number;
    vehicalNumber: string;
    vehicalPrice: number;
    departureTime: string;
}