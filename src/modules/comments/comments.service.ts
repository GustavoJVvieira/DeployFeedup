import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsDTO } from './comments.dto';

@Injectable()
export class CommentsService {
    private comments: CommentsDTO[] = [];

    createComment(comment: CommentsDTO){
        this.comments.push(comment);
        console.log(this.comments)
    }

    findById(id: string): CommentsDTO {
        const foundComment = this.comments.find(comment => comment.id == id);
        if (!foundComment) {
            throw new NotFoundException('Comentario não encontrado');
        }
        
        return foundComment;
    }

    updateComment(comments: CommentsDTO){
        const commentsIndex = this.comments.findIndex(comments => comments.id == comments.id);

        if (commentsIndex < 0) {
            throw new NotFoundException('Comentario não encontrado');
        }

        this.comments[commentsIndex] = comments;
        return;
    }   

    deleteComment(id: string){
        const commentsIndex = this.comments.findIndex(comments => comments.id == id);

        if (commentsIndex < 0) {
            throw new NotFoundException('Comentario não encontrado');
        }

        this.comments.splice(commentsIndex, 1);
        return;
    }


}
