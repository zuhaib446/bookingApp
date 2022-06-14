import { Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RoleGuard extends AuthGuard('jwt') {
    constructor(
        private readonly reflector: Reflector) {
        super();
    }

    handleRequest<TUser = any>(err: any, user: any, info: any, context: any): TUser {
        const roles = this.reflector.get<string[]>('role', context.getHandler());
        console.log({ roles });

        if (!roles) {
            return true as any;
        }
        const isMatch = roles.some(role => user.role === role);
        if (!isMatch) {
            throw new ForbiddenException('Forbidden');
        }
        return user;
    }
}