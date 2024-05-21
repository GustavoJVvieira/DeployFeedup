import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsInt, MinLength, IsDate, IsOptional, isNotEmpty, IsNotEmpty } from 'class-validator';

export class CommentsDTO {
  
  @ApiProperty({
    description: "ID do comentário em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsUUID()
  id?: string;

  @ApiProperty({
    description: "ID do feedup que referencia o comentario em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsUUID()
  id_feedup: string;

  @ApiProperty({
    description: "ID do usuário que comentou em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsString()
  id_usercommented: string;

  @ApiProperty({
    description: "Mensagem de Comentário inserida pelo Usuário.",
    example: "Isso é um comentário.",
    required: true
  })
  
  @IsNotEmpty({message: "A mensagem do Usuário é obrigatório"})
  @IsString()
  @MinLength(1)
  message?: string;

 
  @ApiProperty({
    description: "Data de Criação do Comentário.",
    example: "2024-05-18T20:03:39.486Z",
    required: false
  })
  @IsOptional()
  @IsDate()
  created_at?: Date;

  @ApiProperty({
    description: "Data de Update do Comentário, caso necessário.",
    example: "2024-05-18T20:03:39.486Z",
    required: false
  })
  @IsOptional()
  @IsDate()
  updated_at?: Date;
}