import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/decorator/role.decorator';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
    constructor(
        private readonly servicesService: ServicesService
    ) { }

    async findAll(): Promise<any> {
        return await this.servicesService.findAll();
    }

    async findOne(id: string): Promise<any> {
        return await this.servicesService.findOne(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin', 'owner')
    async create(servicesDto: any): Promise<any> {
        return await this.servicesService.create(servicesDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin', 'owner')
    async update(id: string, servicesDto: any): Promise<any> {
        return await this.servicesService.update(id, servicesDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin')
    async delete(id: string): Promise<any> {
        return await this.servicesService.delete(id);
    }

    async findByUser(userId: string): Promise<any> {
        return await this.servicesService.findByUser(userId);
    }

}
