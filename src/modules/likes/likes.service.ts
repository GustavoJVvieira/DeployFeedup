import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikesEntity } from 'src/db/entities/likes.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LikesService {
    constructor (@InjectRepository(LikesEntity) private readonly likesRepository : Repository <LikesEntity>){}

    async likePost (id: string, user:any){

        const isliked = await this.likesRepository.findOne({where : {id_user : user.sub, id_feedup : id}} || null)
       
        if(isliked != null){
            throw new ForbiddenException('already liked ')
        }
        const like = await {
            id_user : user.sub,
            id_feedup : id,
        }
        
        return this.likesRepository.save(like)

    }

   async dislikePost(id : string, user : any){

        return this.likesRepository.delete({id_user : user.sub, id_feedup : id})
   }   
}
