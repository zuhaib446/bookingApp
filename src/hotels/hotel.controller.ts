import { Body, Controller, Get, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { HotelDto } from './dto/hotel.dto';
import { HotelService } from './hotel.service';
import { HotelInterface } from './interface/hotel.interface';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Role } from 'src/auth/decorator/role.decorator';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('hotel')
@UseGuards(RoleGuard)
export class HotelController {
    constructor(private readonly hotelService: HotelService) { }

    @UseInterceptors(FileInterceptor('image'))
    @UseGuards(AuthGuard('jwt'))
    @Role('admin', 'owner')
    @Post()
    async create(
        @Req() req: any,
        @Body() hotelDto: HotelDto,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<HotelInterface> {
        const user = req.user.id
        const createData = {
            ...hotelDto,
            image: file?.path && `${file?.path}.${file?.mimetype.split('/')[1]}`
        }
        return await this.hotelService.create(user, createData)
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
    @UseInterceptors(FileInterceptor('image'))
    @Role('owner')
    @Post('/:id')
    async update(
        @Param('id') id: string,
        @Body() hotelDto: HotelDto,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<HotelInterface> {
        const updateDto = {
            ...hotelDto,
            image: file?.path && `${file?.path}.${file?.mimetype.split('/')[1]}`
        }
        return await this.hotelService.update(id, updateDto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin')
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
