import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FeedupsService } from './feedups.service';
import { FeedupDTO } from './feedups.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard) // Autorization Guard User

@Controller('formulario')
export class FeedupsController {
  constructor(private readonly feedupsService: FeedupsService) {}
  
  @Post()
  async createFeedup(@Body() feedup: FeedupDTO) {
    await this.feedupsService.createFeedup(feedup);
  }

      /*@Get('/:id')
      findById(@Param('id') id: string): FeedupDTO{
          return this.feedupsService.findById(id);
      }*/

      /*@Put()
      updateUser(@Body() feedup: FeedupDTO) {
          this.feedupsService.updateFeedup(feedup);
      }*/

      
      /*@Delete('/:id')
        deleteFeedup(@Param('id') id: string) {
            this.feedupsService.deleteFeedup(id);
        }*/
}
