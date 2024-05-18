import { Injectable, NotFoundException } from '@nestjs/common';
import { FeedupDTO } from './feedups.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/db/entities/users.entity';

@Injectable()
export class FeedupsService {
    constructor(@InjectRepository(FeedbackEntity) private readonly feedupRepository : Repository<FeedbackEntity>,
    @InjectRepository(UserEntity) private readonly usersRepository : Repository <UserEntity>){}
    
    async createFeedup(feedup : FeedupDTO, usuario: any){

       const FeedupToSave: FeedbackEntity = {

        id_usersend: usuario.sub,
        id_userreceived: feedup.id_userreceived,
        value: feedup.value,
        isconstructive: feedup.isconstructive,
        isanonimous: feedup.isanonimous,
        likes: feedup.likes,
        message: feedup.message

       }
       const createdFeedup = await this.feedupRepository.save(FeedupToSave);
       
       await this.usersRepository.query(`UPDATE users SET coin = coin + 100 WHERE id = $1`, [usuario.sub]);
       await this.usersRepository.query(`UPDATE users SET coin = coin + 200 WHERE id = $1`, [feedup.id_userreceived]);

       return this.mapEntityToDTO(createdFeedup);

    }

    private mapEntityToDTO(feedup: FeedbackEntity): FeedupDTO {
        return {

        id_usersend: feedup.id_usersend,
        id_userreceived: feedup.id_userreceived,
        value: feedup.value,
        isconstructive: feedup.isconstructive,
        isanonimous: feedup.isanonimous,
        likes: feedup.likes,
        message: feedup.message
        
        }
    }
}
