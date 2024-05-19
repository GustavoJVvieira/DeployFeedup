import { Controller, Delete, Get, Param, Req, UseGuards } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedupDTO, FindAllFeedups } from '../feedups/feedups.dto';
import { User } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { FindAllUsers } from '../user/user.dto';


@UseGuards(AuthGuard)

@Controller('home')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  async findAll(){
   
    return this.feedService.findAll();
  }

  @Delete('/:id')
  async deleteFeedup(@Param('id') id: string, @User() user: any){
    
    return this.feedService.deleteFeedup(id, user);
  }

}
