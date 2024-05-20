import { ExecutionContext, Injectable, UnauthorizedException, createParamDecorator } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { AuthResponseDTO } from './auth.dto';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;

    constructor(private readonly userService: UserService, 
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService

    ) {this.jwtExpirationTimeInSeconds = +this.configService.get<number>('JWT_EXPIRATION_TIME')}

    async sigIn(email: string, password: string): Promise<AuthResponseDTO>{
        const foundUser = await this.userService.findByEmail(email);

        if(!foundUser || !bcryptCompareSync(password, foundUser.password)){
            throw new UnauthorizedException('You are not Allowed. Please provide a valid Token ');
        }

        const payload  = {sub: foundUser.id, 
          username: foundUser.username, 
          email: foundUser.email,
          name: foundUser.name,
          role: foundUser.role,
          coin: foundUser.coin,
          typeuser: foundUser.typeuser };    
        const token = this.jwtService.sign(payload);

        return {token, expiresIn: this.jwtExpirationTimeInSeconds}

    }

    async validate(payload: any) {
       
        return { sub: payload.sub, 
          username: payload.username, 
          email: payload.email,
          name: payload.name,
          role: payload.role,
          coin: payload.coin,
          typeuser: payload.typeuser};
      }

    getHello(): string{
        return "Hello World"
    }
        
    
}

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
)