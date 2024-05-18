import { Module } from '@nestjs/common';
import { FeedupsService } from './feedups.service';
import { FeedupsController } from './feedups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { FeedupDTO } from './feedups.dto';
import { UserEntity } from 'src/db/entities/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FeedbackEntity, UserEntity])],
  controllers: [FeedupsController],
  providers: [FeedupsService],
  
})
export class FeedupsModule {}
