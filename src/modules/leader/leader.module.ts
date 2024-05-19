import { Module } from '@nestjs/common';
import { LeaderService } from './leader.service';
import { LeaderController } from './leader.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/users.entity';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FeedbackEntity])],
  controllers: [LeaderController],
  providers: [LeaderService],
})
export class LeaderModule {}
