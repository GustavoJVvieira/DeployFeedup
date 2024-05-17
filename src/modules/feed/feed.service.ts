import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { FindOptionsWhere, Not, Repository } from 'typeorm';
import { FindAllFeedups } from '../feedups/feedups.dto';
import { FeedupDTO } from '../feedups/feedups.dto';

@Injectable()
export class FeedService {
    constructor(@InjectRepository(FeedbackEntity) private readonly feedupRepository: Repository<FeedbackEntity>){}

    async findAll(params?: FindAllFeedups): Promise<FeedupDTO[]> {
        const searchParams: FindOptionsWhere<FeedbackEntity> = {};

        if (params && params.isconstructive !== false) {
            searchParams.isconstructive = Not(true); 
        }

        const tasksFound = await this.feedupRepository.find({
            where: searchParams,
        });

        return tasksFound.map(taskEntity => this.mapEntityToDto(taskEntity));
    }   


    private mapEntityToDto(feedupEntity: FeedbackEntity): FeedupDTO {
        if(!feedupEntity || feedupEntity.isconstructive === true) {
          return;
        }

        if(feedupEntity.isanonimous){
            
            return {
            id: feedupEntity.id,
            id_usersend: feedupEntity.id_usersend,
            id_userreceived: feedupEntity.id_userreceived,
            value: feedupEntity.value,
            message: feedupEntity.message,
            isanonimous: feedupEntity.isanonimous || false, 
            isconstructive: feedupEntity.isconstructive || false, 
            likes: feedupEntity.likes,
            created_at: feedupEntity.created_at,
            updated_at: feedupEntity.updated_at,
            }
        }

        return {
            id: feedupEntity.id,
            id_usersend: feedupEntity.id_usersend,
            id_userreceived: feedupEntity.id_userreceived,
            value: feedupEntity.value,
            message: feedupEntity.message,
            isanonimous: feedupEntity.isanonimous || false, 
            isconstructive: feedupEntity.isconstructive || false, 
            likes: feedupEntity.likes,
            created_at: feedupEntity.created_at,
            updated_at: feedupEntity.updated_at,
        };
    }
}

