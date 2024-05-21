import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShopService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}

    async shopcoins(user : any){
        const coin = await this.userRepository.findOne(user.sub)
            console.log(coin)
    }

}
