import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
import { UserEntity } from 'src/db/entities/users.entity';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    
    
    @Post()
    createUser(@Body() user: UserDTO) {
      this.userService.createUser(user);
    }

   /* @Get('/:id')
    findById(@Param('id') id: string): UserDTO {
        return this.userService.findById(id);
    }

    /*@Put()
    updateUser(@Body() user: UserDTO) {
        this.userService.updateUser(user);
    }

    @Get()
    findAll(@Query() params: FindAllUsers): UserDTO[] {
        return this.userService.findAll(params);
    }*/
    
}
