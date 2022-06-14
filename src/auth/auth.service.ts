import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import { Request } from 'express';
import { UserInterface } from '../user/interface/user.interface';
import { JwtPayloadInterface } from './interface/jwt-payload.interface';
import { config } from 'dotenv';
config();
@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserInterface>,
    ) { }

    async createToken(user: UserInterface) {
        return sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    }

    async validateUser(payload: JwtPayloadInterface): Promise<UserInterface> {
        const user = await this.userModel.findById(payload.id);
        if (!user) {
            throw new UnauthorizedException("User doesn't exist");
        }
        return user;
    }

    static returnJwtExtractor() {
        return (req: Request) => {
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                return req.headers.authorization.split(' ')[1];
            }
            return null;
        }
    }
}
