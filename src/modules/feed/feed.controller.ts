import { Controller, Get } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedupDTO, FindAllFeedups } from '../feedups/feedups.dto';

@Controller('home')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  async findAll(params?: FindAllFeedups): Promise<FeedupDTO[]>{
    return await this.feedService.findAll(params);
  }

}
