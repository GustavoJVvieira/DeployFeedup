import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { FindOptionsWhere, Not, Repository } from 'typeorm';
import { FindAllFeedups } from '../feedups/feedups.dto';
import { FeedupDTO } from '../feedups/feedups.dto';
import { FindAllUsers, UserDTO } from '../user/user.dto';
import { UserEntity } from 'src/db/entities/users.entity';

@Injectable()
export class FeedService {
    constructor(@InjectRepository(FeedbackEntity) private readonly feedupRepository: Repository<FeedbackEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,){}

    async findAll(params?: FindAllFeedups,  ): Promise<FeedupDTO[]> {
        const searchParams: FindOptionsWhere<FeedbackEntity> = {};

    
        if (params && params.isconstructive !== false) {
            searchParams.isconstructive = Not(true); 
        }

        const tasksFound = await this.feedupRepository.query(`SELECT feedbacks.*, users.name, users.username
            FROM feedbacks INNER JOIN users ON users.id = feedbacks.id_usersend;`)
    
    
        return tasksFound.map(taskEntity => this.mapEntityToDto(taskEntity));
    }   


    private mapEntityToDto(feedupEntity: FeedbackEntity): FeedupDTO{
        if(!feedupEntity || feedupEntity.isconstructive === true) {
          return;
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

