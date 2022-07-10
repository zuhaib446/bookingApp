import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesSchema } from './schema/services.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Services', schema: ServicesSchema },
      { name: 'VehicleDetail', schema: ServicesSchema },
    ]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule { }
