import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/db/entities/feedups.entity';
import { UserEntity } from 'src/db/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {

    constructor(@InjectRepository(UserEntity) private readonly usersRepository : Repository<UserEntity>,
    @InjectRepository(FeedbackEntity) private readonly feedupRepository: Repository<FeedbackEntity>){}


async getLeaderBoard(username: any){

const users = await this.usersRepository.query(`SELECT u.*, COUNT(f.id_usersend) AS total_feedbacks
FROM users AS u LEFT JOIN feedbacks AS f ON u.id = f.id_userreceived WHERE u.id = $1 GROUP BY u.id;`, [username.sub])

const feedback_send =  await this.feedupRepository.find({where :{id_usersend : username.sub}})
const feedback_received =  await this.feedupRepository.find({where :{id_userreceived : username.sub}})

return {users, feedback_send, feedback_received}

}


async deleteFeedup(id: string, user : any){
const feedup = await this.feedupRepository.findOne({where: {id: id}});

if(!feedup){
throw new NotFoundException("Comment not found");
}

if( feedup.id_usersend !== user.sub){
throw new NotFoundException("You can't delete this comment");
}

this.usersRepository.query(`UPDATE users SET coin = coin - 100 WHERE id = $1`, [user.sub]);
this.usersRepository.query(`UPDATE users SET coin = coin - 200 WHERE id = $1`, [feedup.id_userreceived]);


await this.feedupRepository.delete(id);
return {message : `${user.username} your feedup was deleted`}

}

async getColaborator(username : string){

    const colaborator = await this.usersRepository.findOne({where : {username : username}})

    const users = await this.usersRepository.query(`SELECT u.username, u.name, u.email, u.role, u.coin, COUNT(f.id_usersend) AS total_feedbacks
    FROM users AS u LEFT JOIN feedbacks AS f ON u.id = f.id_userreceived WHERE u.id = $1 GROUP BY u.id;`, [colaborator.id])

    const feedback_send =  await this.feedupRepository.query(`SELECT feedbacks.id,
    feedbacks.value, feedbacks.message, feedbacks.created_at, user_send.name AS sender_name, user_send.username AS sender_username,
    user_received.name AS receiver_name, user_received.username AS receiver_username
     FROM feedbacks INNER JOIN users AS user_send ON feedbacks.id_usersend = user_send.id
    INNER JOIN users AS user_received ON feedbacks.id_userreceived = user_received.id WHERE user_send.id = $1`, [colaborator.id])
    
    const feedback_received =  await this.feedupRepository.query(`SELECT 
    feedbacks.value, feedbacks.message, feedbacks.created_at, user_send.name AS sender_name, user_send.username AS sender_username,
    user_received.name AS receiver_name, user_received.username AS receiver_username
     FROM feedbacks INNER JOIN users AS user_send ON feedbacks.id_usersend = user_send.id
    INNER JOIN users AS user_received ON feedbacks.id_userreceived = user_received.id WHERE user_received.id = $1`, [colaborator.id])
    
    return {users, feedback_send, feedback_received}
}


async getMetrics(){
    
    const feedback_date = await this.feedupRepository.query(`SELECT DATE(feedbacks.created_at) as data_feedup, 
    COUNT(*) AS quantidade_feedups FROM feedbacks GROUP BY data_feedup ORDER BY data_feedup ASC;`)

    const most_value = await this.feedupRepository.query(`SELECT value, COUNT(*) AS quantidade
    FROM feedbacks
    GROUP BY value
    ORDER BY value DESC;`)

    const most_moods = await this.feedupRepository.query(`SELECT moods, COUNT(*) AS quantidade
    FROM user_moods
    GROUP BY moods
    ORDER BY moods DESC;`)

    return {feedback_date, most_value, most_moods}

}
}
