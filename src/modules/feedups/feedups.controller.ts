import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FeedupsService } from './feedups.service';
import { FeedupDTO } from './feedups.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard) // Autorization Guard User
@ApiTags('Form')
@Controller('forms')
export class FeedupsController {
  constructor(private readonly feedupsService: FeedupsService) {}
  
  @Post()
  @ApiResponse({ status: 201, description: 'O Feedup foi salvo com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)
 
  async createFeedup(@Body() feedup: FeedupDTO, @User() user: any) {
    await this.feedupsService.createFeedup(feedup, user);
  }

    
}
