import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors, } from '@nestjs/common';
import { HotelDto } from './dto/hotel.dto';
import { HotelService } from './hotel.service';
import { HotelInterface } from './interface/hotel.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('hotel')
export class HotelController {
    constructor(private readonly hotelService: HotelService) { }

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

    @Post('/:id')
    async update(
        @Param('id') id: string,
        @Body() hotelDto: HotelDto
    ): Promise<HotelInterface> {
        return await this.hotelService.update(id, hotelDto)
    }

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
