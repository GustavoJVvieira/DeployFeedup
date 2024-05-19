import { Injectable, NotFoundException } from '@nestjs/common';
import { MoodsDTO } from './moods.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoodsEntity } from 'src/db/entities/moods.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoodsService {
    constructor(@InjectRepository(MoodsEntity) private readonly  moodsRepository : Repository<MoodsEntity>){}

    createMoods(moods: MoodsDTO, user :any){
        
        const crateMoods ={
            id_user : user.sub,
            moods: moods.moods
        }
        return this.moodsRepository.save(crateMoods);
    }








}
