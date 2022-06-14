import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotels/hotel.module';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './rooms/room.module';
import { UserModule } from './user/user.module';
import { OwnerModule } from './owner/owner.module';
import { AuthModule } from './auth/auth.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    HotelModule,
    RoomModule,
    UserModule,
    OwnerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
