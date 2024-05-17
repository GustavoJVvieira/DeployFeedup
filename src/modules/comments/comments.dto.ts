export class CommentsDTO{
  id ?: string;
  id_feedup: string;
  id_usercommented: string;
  message: string;
  like: number;
  created_at ?: Date;
  updated_at ?: Date;
}