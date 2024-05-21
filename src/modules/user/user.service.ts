import { Injectable, NotFoundException } from '@nestjs/common';
import {  UserDTO } from './dto/user.dto';
import { hashSync as bcryptHashSync} from "bcrypt"
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/db/entities/users.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity> ){}

    
    async createUser(newUser: UserDTO){
      const validation = await this.usersRepository.query(`select distinct users.username, users.email from users`);
       
        const dbUser = new UserEntity();
        dbUser.name = newUser.name;
        dbUser.email = newUser.email;
        dbUser.username = newUser.username;
        dbUser.role = newUser.role;
        dbUser.coin = newUser.coin;
        dbUser.typeuser = newUser.typeuser;
      

        dbUser.password = bcryptHashSync(newUser.password, 10);

        
        /*if(validation.username === dbUser.username){
          throw new NotFoundException('Username already exists');
        }
        if (validation.email = dbUser.email){
          throw new NotFoundException('Email already exists');
        }*/

        return this.usersRepository.save(dbUser);
       
    }

    async findByEmail(email: string): Promise<UserDTO | null> {
        const emailFound = await this.usersRepository.findOne({
          where: { email : email},
        });
    
        if (!emailFound) {
          return null;
        }
    
        return {
          id: emailFound.id,
          email: emailFound.email,
          password: emailFound.password,
          name: emailFound.name,
          role: emailFound.role,
          coin: emailFound.coin,
          typeuser: emailFound.typeuser,
          username: emailFound.username,
        };
      }
    

    
}


