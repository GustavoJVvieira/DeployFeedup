
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CommentsDTO } from './dto/comments.dto';
import { CommentsEntity } from 'src/db/entities/comments.entity';
import { UserEntity } from 'src/db/entities/users.entity';
import { identity } from 'rxjs';
 // Importe a entidade de usuários

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
  ) {}

  async createComment(params: any, user: any, id: string)
   {

    const newComment = this.commentsRepository.create({
      id_usercommented: user.sub,
      id_feedup: id,
      message: params.message,
    });

    return this.commentsRepository.save(newComment);
  }

  async findById(id: string) {
    
    return this.commentsRepository.query(`SELECT comments.id,
    users.username, comments.message, comments.created_at FROM
    comments INNER JOIN users ON users.id = comments.id_usercommented
    INNER JOIN  feedbacks ON feedbacks.id = comments.id_feedup
    WHERE feedbacks.id = $1`, [id])

  }

  async deleteComment(id: string, user: any) {
    const comment = await this.commentsRepository.findOne({where:{id}});
    

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    if (comment.id_usercommented !== user.sub) {
      throw new NotFoundException('You are not allowed to delete this comment');
    }

    await this.commentsRepository.delete(id);

    return { message: `${user.username}, your comment was deleted successfully` };
  }
}
