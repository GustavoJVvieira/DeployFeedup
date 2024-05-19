import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { MoodsService } from './moods.service';
import { MoodsDTO } from './moods.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';

@UseGuards(AuthGuard) // Autorization Guard User

@Controller('moods')
export class MoodsController {
  constructor (private readonly moodsService: MoodsService) {}
  
 
  @Post()
  createMood(@Body() mood: MoodsDTO, @User() user: any ) {
    this.moodsService.createMoods(mood, user);
  }


}
