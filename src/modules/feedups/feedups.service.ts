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
    
    
    async createFeedup(feedup : FeedupDTO, user: any){
    const userReceived = await this.usersRepository.findOne({where: {username : feedup.username_userreceived}});
        
        async function create(feedup: any, user: any, userReceived : any) {

            const FeedupToSave =  {

                id_usersend: user.sub,
                id_userreceived: userReceived.id,
                username_userreceived: userReceived.username,
                value: feedup.value,
                isconstructive: feedup.isconstructive,
                isanonymous: feedup.isanonymous,
                likes: feedup.likes,
                message: feedup.message
        
               }

               return FeedupToSave;
        }
        
        
        create( feedup, user, userReceived).then((FeedupToSave) => {
            

             this.usersRepository.query(`UPDATE users SET coin = coin + 100 WHERE id = $1`, [user.sub]);
             this.usersRepository.query(`UPDATE users SET coin = coin + 200 WHERE id = $1`, [FeedupToSave.id_userreceived]);
           
            
            this.feedupRepository.save(FeedupToSave);

        }).catch((error) => {

            console.error('Erro ao criar o feedup:', error);

        });
       
       

       

       

       //return this.mapEntityToDTO(createdFeedup);

    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    private mapEntityToDTO(feedup: FeedbackEntity): FeedupDTO {
        return {

        id_usersend: feedup.id_usersend,
        username_userreceived: feedup.username_userreceived,
        id_userreceived: feedup.id_userreceived,
        value: feedup.value,
        isconstructive: feedup.isconstructive,
        isanonymous: feedup.isanonymous,
        likes: feedup.likes,
        message: feedup.message
        
        }
    }
}
