import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsDTO } from './comments.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentsEntity } from 'src/db/entities/comments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
   constructor(@InjectRepository(CommentsEntity) private readonly commentsRepository : Repository<CommentsEntity>){}

    async createComment(comment: CommentsDTO, user : any, id: string){
        
        console.log(id)

        const newComments: CommentsDTO = {

            id_usercommented: user.sub,
            id_feedup: id,
            message: comment.message,
            like: comment.like,
            
        }
        return this.commentsRepository.save(newComments);
    }

   async findById(id: string){
        
       return this.commentsRepository.query(`SELECT users.username, comments.message,
        comments.like, comments.created_at
        FROM users
        INNER JOIN comments ON comments.id_usercommented = users.id
        WHERE comments.id_feedup = $1;`, [id]);

    }
       
    async deleteComment(id: string, user: any){

        const comment = await this.commentsRepository.findOne({where: {id: id}});

        if(!comment){
            throw new NotFoundException("Comment not found");
        }

        // Checks if the authenticated user is the owner of the feed
        if(comment.id_usercommented !== user.sub){
            throw new NotFoundException("You are not allowed to delete this feed");
        }

        // If everything is correct, proceed with the deletion
        await this.commentsRepository.delete(id);

        return { message: `${user.username}, your comment is  deleted successfully`};

    }
       
}
