import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { RoomSchema } from './schema/room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Room', schema: RoomSchema }
    ]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})

export class RoomModule { }
