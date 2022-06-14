import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayloadInterface } from '../interface/jwt-payload.interface';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private readonly authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || 'secret',
        });
    }

    async validate(jwtPayload: JwtPayloadInterface) {
        const user = await this.authService.validateUser(jwtPayload);
        if (!user) {
            throw new UnauthorizedException("Invalid credentials");
        }
        return user;
    }
}
