import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponseDTO } from './auth.dto';
import { HttpException, HttpStatus } from '@nestjs/common'; 

@Controller('/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  async sigIn(@Body("email") email: string, @Body("password") password: string): Promise<AuthResponseDTO> {
    try {
      const user = await this.authService.sigIn(email, password);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      // Tratamento de outros tipos de erros, se necessário
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
