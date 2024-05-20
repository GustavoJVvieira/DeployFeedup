import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import {  UserDTO } from './user.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashSync} from "bcrypt"
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/users.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity> ){}

    
    async createUser(newUser: UserDTO){
        const userAlreadyRegistered = await this.usersRepository.findOneBy({email: newUser.email});

        if(userAlreadyRegistered) throw new ConflictException(`Ih paizao, ${newUser.email} já tem cadastro já`)
        
        const dbUser = new UserEntity();
        dbUser.name = newUser.name;
        dbUser.email = newUser.email;
        dbUser.username = newUser.username;
        dbUser.role = newUser.role;
        dbUser.coin = newUser.coin;
        dbUser.people = newUser.people;
        dbUser.leader = newUser.leader;
        
        dbUser.password = bcryptHashSync(newUser.password, 10);

        const {email, name} = await this.usersRepository.save(dbUser);

        return {email, name};

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
          leader: emailFound.leader,
          people: emailFound.people,
          username: emailFound.username,
        };
      }
    

    
}


