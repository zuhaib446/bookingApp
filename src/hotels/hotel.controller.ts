import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { HotelDto } from './dto/hotel.dto';
import { HotelService } from './hotel.service';
import { HotelInterface } from './interface/hotel.interface';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Role } from 'src/auth/decorator/role.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('hotel')
@UseGuards(RoleGuard)
export class HotelController {
    constructor(private readonly hotelService: HotelService) { }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin' || 'owner')
    @Post()
    async create(
        @Body() hotelDto: HotelDto
    ): Promise<HotelInterface> {
        console.log(hotelDto);

        return await this.hotelService.create(hotelDto)
    }

    @Get()
    async findAll(): Promise<HotelInterface[]> {
        return await this.hotelService.findAll()
    }

    @Get('/:id')
    async findOne(
        @Param('id') id: string
    ): Promise<HotelInterface> {
        return await this.hotelService.findOne(id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin' || 'owner')
    @Post('/:id')
    async update(
        @Param('id') id: string,
        @Body() hotelDto: HotelDto
    ): Promise<HotelInterface> {
        return await this.hotelService.update(id, hotelDto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin' || 'owner')
    @Post('/:id/delete')
    async delete(
        @Param('id') id: string
    ): Promise<HotelInterface> {
        return await this.hotelService.delete(id)
    }

    @Get('/:name')
    async findByName(
        @Param('name') name: string
    ): Promise<HotelInterface> {
        return await this.hotelService.findByName(name)
    }

}
