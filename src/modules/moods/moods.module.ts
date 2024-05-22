import { Module } from '@nestjs/common';
import { MoodsService } from './moods.service';
import { MoodsController } from './moods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodsEntity } from 'src/db/entities/moods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoodsEntity])],
  controllers: [MoodsController],
  providers: [MoodsService],
})
export class MoodsModule {}
