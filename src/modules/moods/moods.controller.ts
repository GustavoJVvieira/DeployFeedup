import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { MoodsService } from './moods.service';
import { MoodsDTO } from './moods.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard) // Autorization Guard User
@ApiTags('Moods')
@Controller('moods')
export class MoodsController {
  constructor (private readonly moodsService: MoodsService) {}
  
 
  @Post()

  @ApiResponse({ status: 204, description: 'Foi feito o moods com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()
  
  @ApiBearerAuth()
  createMood(@Body() mood: MoodsDTO, @User() user: any ) {
    this.moodsService.createMoods(mood, user);
  }


}
