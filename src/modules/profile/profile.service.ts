import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { UserEntity } from 'src/db/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(UserEntity) private readonly usersRepository : Repository<UserEntity>,
                @InjectRepository(FeedbackEntity) private readonly feedupRepository: Repository<FeedbackEntity>){}


    async findUser(username: any){

       const users = await this.usersRepository.findOne({where :{id: username.sub}})
       const feedback_send =  await this.feedupRepository.find({where :{id_usersend : username.sub}})
       const feedback_received =  await this.feedupRepository.find({where :{id_userreceived : username.sub}})

       return {users, feedback_send, feedback_received}

    }
}
