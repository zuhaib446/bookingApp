import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { BookingDto } from './dto/booking.dto';
import { BookingService } from './booking.service';
import { BookingInterface } from './interface/booking.interface';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Role } from 'src/auth/decorator/role.decorator';
import { AuthGuard } from '@nestjs/passport';
@Controller('booking')
@UseGuards(RoleGuard)
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }
    @UseGuards(AuthGuard('jwt'))
    @Role('user')
    @Post()
    async create(
        @Req() req: any,
        @Body() bookingDto: BookingDto
    ): Promise<BookingInterface> {
        const userID = req.user.id
        return await this.bookingService.create(userID, bookingDto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin', 'user', 'owner')
    @Get()
    async findAll(
    ): Promise<BookingInterface[]> {
        return await this.bookingService.findAll()
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin', 'user')
    @Get('/:id')
    async findOne(
        @Param('id') id: string
    ): Promise<BookingInterface> {
        return await this.bookingService.findOne(id)
    }
}
