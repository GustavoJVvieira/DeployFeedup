export class FeedupDTO{

  id ?: string;
  id_usersend: string;
  id_userreceived: string;
  value: string;
  message: string;
  isanonimous ?: boolean;
  isconstructive ?: boolean;
  likes: number;
  created_at ?: Date;
  updated_at ?: Date;

}


export class FindAllFeedups{
    id ?: string;
    id_usersend: string;
    id_userreceived: string;
    value: string;
    message: string;
    isanonimous ?: boolean;
    isconstructive ?: boolean;
    likes: number;
    created_at ?: Date;
    updated_at ?: Date;
}