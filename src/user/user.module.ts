import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from './schema/user.schema';
import { AuthModule } from 'src/auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { existsSync, mkdirSync } from 'fs';

// create a folder called uploads in the root directory
if (!existsSync('./uploads')) {
  mkdirSync('./uploads');
}

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
      preservePath: true,
      limits: { fileSize: 10 * 1024 * 1024 },
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
    ]),
    AuthModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule { }
