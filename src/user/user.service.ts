import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './interface/user.interface';
import { UserDto, UserLoginDto } from './dto/user.dto';
import { User } from './schema/user.schema';
import { genSalt, hash, compare } from 'bcryptjs';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserInterface>,
        private readonly authService: AuthService,
    ) { }

    async register(userDto: UserDto): Promise<UserInterface> {
        try {
            const salt = await genSalt(10);
            const hashedPassword = await hash(userDto.password, salt);
            const createdUser = new this.userModel({
                ...userDto,
                password: hashedPassword,
            });
            await createdUser.save();
            return createdUser
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException(`User with email ${userDto.email} already exists`);
            }
            throw new Error(error);
        }
    }

    async login(userLogin: UserLoginDto) {
        try {
            const user = await this.userModel.findOne({ email: userLogin.email });
            if (!user) {
                throw new Error(`User with email ${userLogin.email} does not exist`);
            }
            const isMatch = await compare(userLogin.password, user.password);
            if (!isMatch) {
                throw new Error('Invalid password');
            }
            return {
                name: user.firstName,
                email: user.email,
                token: await this.authService.createToken(user._id as any),
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}
