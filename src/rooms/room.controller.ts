import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RoomsDto } from './dto/rooms.dto';
import { RoomService } from './room.service';
import { RoomInterface } from './interface/room.interface';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/decorator/role.decorator';

@Controller('room')
@UseGuards(RoleGuard)
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin', 'owner')
    @Post()
    async create(
        @Body() roomsDto: RoomsDto
    ): Promise<RoomInterface> {
        return await this.roomService.create(roomsDto)
    }

    @Get()
    async findAll(): Promise<RoomInterface[]> {
        return await this.roomService.findAll()
    }

    @Get('/:id')
    async findOne(
        @Param('id') id: string
    ): Promise<RoomInterface> {
        return await this.roomService.findOne(id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin', 'owner')
    @Post('/:id')
    async update(
        @Param('id') id: string,
        @Body() roomsDto: RoomsDto
    ): Promise<RoomInterface> {
        return await this.roomService.update(id, roomsDto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Role('admin')
    @Post('/:id/delete')
    async delete(
        @Param('id') id: string
    ): Promise<RoomInterface> {
        return await this.roomService.delete(id)
    }
}
