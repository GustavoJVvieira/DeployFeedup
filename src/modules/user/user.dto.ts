import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export class UserDTO {

  id ?: string;
  password : string;
  username : string;
  name : string;
  email : string;
  role : string;
  coin : number;
  leader : boolean;
  people : boolean;
  created_at ?: Date;
  updated_at ?: Date;

}

export class FindAllUsers{
   
    id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    role: string;
    coin: number;
    leader: boolean;
    people: boolean;

}



