import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { UserEntity } from 'src/db/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FeedbackEntity])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
