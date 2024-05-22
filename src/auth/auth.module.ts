import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [JwtModule.registerAsync({
    global: true,
    useFactory: async(configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET') || process.env.JWT_SECRET,
      signOptions: { expiresIn:  +configService.get<number>('JWT_EXPIRATION_TIME') },
    }),
    inject: [ConfigService],
  }), UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
