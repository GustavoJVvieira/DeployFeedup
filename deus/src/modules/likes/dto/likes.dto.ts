import { IsUUID, IsDate } from 'class-validator';

export class LikesDTO {
  
  @IsUUID()
  id?: string;

  @IsUUID()
  id_feedup: string;

  @IsUUID()
  id_user: string;

  @IsDate()
  created_at?: Date;

  @IsDate()
  updated_at?: Date;
}