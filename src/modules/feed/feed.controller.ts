import { Controller, Get, Param, UseGuards } from '@nestjs/common';
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
  async findAll(params?: FindAllFeedups): Promise<FeedupDTO[]>{
    return this.feedService.findAll(params);
  }


}
