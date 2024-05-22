import { ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/db/entities/users.entity';
import { Cache } from '@nestjs/cache-manager';

@Injectable()
export class FeedService {
    constructor(@InjectRepository(FeedbackEntity) private readonly feedupRepository: Repository<FeedbackEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    private readonly cacheService : Cache){}

    //Injectable Find All Feedups 
    async findAll() {
  
<<<<<<< HEAD
        const feedupFound = await this.feedupRepository.query(` SELECT feedbacks.id_usersend,
=======
        const feedupFound = await this.feedupRepository.query(` SELECT 
>>>>>>> a72240516b0f14f390ea73b2319fcab8dc4eba57
        feedbacks.isanonymous, feedbacks.id, feedbacks.value, feedbacks.message, feedbacks.created_at, user_send.name AS sender_name, user_send.username AS sender_username,
        user_received.name AS receiver_name, user_received.username AS receiver_username
         FROM feedbacks INNER JOIN users AS user_send ON feedbacks.id_usersend = user_send.id
        INNER JOIN users AS user_received ON feedbacks.id_userreceived = user_received.id
        WHERE feedbacks.isconstructive = false;`)
    
        const users = await this.userRepository.query(`SELECT  COUNT(*) AS mention_count, 
        user_send.name, user_send.username FROM feedbacks INNER JOIN users AS user_send 
        ON feedbacks.id_usersend = user_send.id
        GROUP BY feedbacks.id_usersend, user_send.name, user_send.username ORDER BY COUNT (*) DESC;`);


        for (let i = 0; i < feedupFound.length; i++) {

        // Verifica se 'isanonymous' existe e é verdadeiro
        if (feedupFound[i].isanonymous && feedupFound[i].isanonymous === true) {
            feedupFound[i].sender_name = 'Anônimo';
            feedupFound[i].sender_username = 'Anônimo';
    }
  }
      
        return {users, feedupFound}

     
    }   
    
    //Injectable Delete only User Feedup´s 
    async deleteFeedup( id: string, user: any) {
        const feed = await this.feedupRepository.findOne({where: {id : id }})
    
        if (!feed) {
          throw new NotFoundException('Feed not found');
        }
    
        // Checks if the authenticated user is the owner of the feed
        if (feed.id_usersend !== user.sub) {
          throw new ForbiddenException('You are not allowed to delete this feedup');
        }

        this.userRepository.query(`UPDATE users SET coin = coin - 100 WHERE id = $1`, [user.sub]);
        this.userRepository.query(`UPDATE users SET coin = coin - 200 WHERE id = $1`, [feed.id_userreceived]);

        // If everything is correct, proceed with the deletion
        await this.feedupRepository.delete(id);

        return { message: `${user.username}, your feedup is  deleted successfully`};

      }
}

    