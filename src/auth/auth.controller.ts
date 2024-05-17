import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponseDTO } from './auth.dto';

@Controller('/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  async sigIn( @Body("email") email:string, @Body("password") password:string ):Promise <AuthResponseDTO>{
    return this.authService.sigIn( email,password );
  }






}
