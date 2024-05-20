
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CommentsDTO } from './dto/comments.dto';
import { CommentsEntity } from 'src/db/entities/comments.entity';
import { UserEntity } from 'src/db/entities/users.entity';
 // Importe a entidade de usuários

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
  ) {}

  async createComment(comment: CommentsDTO, user: UserEntity, id: string) {
    const newComment = this.commentsRepository.create({
      id_usercommented: user.id,
      id_feedup: id,
      message: comment.message,
    });

    return this.commentsRepository.save(newComment);
  }

  async findById(id: string) {
    return this.commentsRepository
      .createQueryBuilder('comments')
      .select([
        'users.username',
        'comments.message',
        'comments.created_at',
      ])
      .innerJoin('comments.id_usercommented', 'users')
      .where('comments.id_feedup = :id', { id })
      .getRawMany();
  }

  async deleteComment(id: string, user: UserEntity) {
    const comment = await this.commentsRepository.findOne({where:{id}});

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    if (comment.id_usercommented !== user.id) {
      throw new NotFoundException('You are not allowed to delete this comment');
    }

    await this.commentsRepository.delete(id);

    return { message: `${user.username}, your comment was deleted successfully` };
  }
}
