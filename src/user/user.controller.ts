import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface } from './interface/user.interface';
import { UserDto, UserLoginDto } from './dto/user.dto';

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
    ): Promise<UserInterface> {
        return await this.userService.login(userDto)
    }
}
