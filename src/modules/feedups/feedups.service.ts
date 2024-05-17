import { Injectable, NotFoundException } from '@nestjs/common';
import { FeedupDTO } from './feedups.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedupsService {
    constructor(@InjectRepository(FeedbackEntity) private readonly feedupReposioty : Repository<FeedbackEntity>){}
    
    async createFeedup(feedup : FeedupDTO){

       const FeedupToSave: FeedbackEntity = {

        id_usersend: feedup.id_usersend,
        id_userreceived: feedup.id_userreceived,
        value: feedup.value,
        isconstructive: feedup.isconstructive,
        isanonimous: feedup.isanonimous,
        likes: feedup.likes,
        message: feedup.message

       }
       const createdFeedup = await this.feedupReposioty.save(FeedupToSave);
        return this.mapEntityToDTO(createdFeedup);

        
    }

    /*findById(id: string): FeedupDTO {
        const foundFeedup = this.feedups.find(feedup => feedup.id == id);

        if (!foundFeedup) {
            throw new NotFoundException('FeedUp não encontrado');
        }
        
        return foundFeedup;
    }

    updateFeedup(feedup: FeedupDTO){
        const feedupIndex = this.feedups.findIndex(feedup => feedup.id == feedup.id);
        if (feedupIndex < 0) {
            throw new NotFoundException('Usuario não encontrado');
        }

        this.feedups[feedupIndex] = feedup;
        return;
    } 

    deleteFeedup(id: string){
        const feedupIndex = this.feedups.findIndex(feedup => feedup.id == id);
        if (feedupIndex < 0) {
            throw new NotFoundException('FeedUP não encontrado');
        }

        this.feedups.splice(feedupIndex, 1);
        return;
    }*/

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
