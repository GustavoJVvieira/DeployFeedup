import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { UserType } from 'src/enum/user-type.enum';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private readonly jwtService : JwtService) {}

  async canActivate(context: ExecutionContext): Promise <boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    const token = authorization.replace('Bearer ', '');

    const loginPayload = await this.jwtService.verifyAsync(token, { secret: process.env.JWT_SECRET});
    
    
    if (!loginPayload) {
        console.error('Token JWT inválido ou ausente');
        return false;
    }

  
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => role === loginPayload.typeuser);
   }
}