import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FeedupsService } from './feedups.service';
import { FeedupDTO } from './feedups.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';

@UseGuards(AuthGuard) // Autorization Guard User

@Controller('formulario')
export class FeedupsController {
  constructor(private readonly feedupsService: FeedupsService) {}
  
  @Post()
  @UseGuards(AuthGuard)
  async createFeedup(@Body() feedup: FeedupDTO, @User() user: any) {
    await this.feedupsService.createFeedup(feedup, user);
  }

    
}
