import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomsDto } from './dto/rooms.dto';
import { RoomService } from './room.service';
import { RoomInterface } from './interface/room.interface';

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

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

    @Post('/:id')
    async update(
        @Param('id') id: string,
        @Body() roomsDto: RoomsDto
    ): Promise<RoomInterface> {
        return await this.roomService.update(id, roomsDto)
    }

    @Post('/:id/delete')
    async delete(
        @Param('id') id: string
    ): Promise<RoomInterface> {
        return await this.roomService.delete(id)
    }
}
