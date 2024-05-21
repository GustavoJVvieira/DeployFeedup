import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { UserEntity } from 'src/db/entities/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FeedbackEntity,UserEntity])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
