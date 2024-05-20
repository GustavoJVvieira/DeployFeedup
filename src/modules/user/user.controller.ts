import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { UserEntity } from 'src/db/entities/users.entity';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    
    
    @Post()
    @ApiResponse({ status: 201, description: 'Foi feito o cadastro de usuário com sucesso'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 404, description: 'Not Found'})
    @ApiResponse({ status: 500, description: 'Internal Server Error'})
   
    createUser(@Body() user: UserDTO) {
      this.userService.createUser(user);
    }


    
}
