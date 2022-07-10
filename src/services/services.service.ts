import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServicesInterface } from './interface/services.interface';
import { ServicesDto } from './dto/services.dto';
import { VehicleDetail } from './schema/services.schema';

@Injectable()
export class ServicesService {
    constructor(
        @InjectModel(VehicleDetail.name) private readonly vehicleDetailModel: Model<ServicesInterface>
    ) { }

    async create(servicesDto: ServicesDto): Promise<ServicesInterface> {
        const services = new this.vehicleDetailModel(servicesDto);
        return services.save();
    }

    async findAll(): Promise<ServicesInterface[]> {
        return await this.vehicleDetailModel.find();
    }

    async findOne(id: string): Promise<ServicesInterface> {
        return await this.vehicleDetailModel.findById(id);
    }

    async update(id: string, servicesDto: ServicesDto): Promise<ServicesInterface> {
        return await this.vehicleDetailModel.findByIdAndUpdate(id, servicesDto, { new: true });
    }

    async delete(id: string): Promise<ServicesInterface> {
        return await this.vehicleDetailModel.findByIdAndDelete(id);
    }

    async findByUser(userId: string): Promise<ServicesInterface[]> {
        return await this.vehicleDetailModel.find({ user: userId });
    }
}
