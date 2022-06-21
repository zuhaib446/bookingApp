import { Body, Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface } from './interface/user.interface';
import { updateUserDto, UserDto, UserLoginDto } from './dto/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/register')
    async register(
        @Body() userDto: UserDto
    ): Promise<UserInterface> {
        return await this.userService.register(userDto)
    }

    @Post('/login')
    async login(
        @Body() userDto: UserLoginDto
    ): Promise<any> {
        return await this.userService.login(userDto)
    }

    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(FileInterceptor('avatar'))
    @Post('/update')
    async updateUserData(
        @Req() req: any,
        @Body() userDto: updateUserDto,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<string> {
        const userID = req.user.id
        const data = {
            ...userDto,
            avatar: file?.path && `${file?.path}.${file?.mimetype.split('/')[1]}`
        }
        return await this.userService.updateUserData(userID, data)
    }

}
