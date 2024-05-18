import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { UserEntity } from 'src/db/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackEntity,UserEntity])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
