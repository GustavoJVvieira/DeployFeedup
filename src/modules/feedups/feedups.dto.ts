import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsString, IsBoolean, IsInt, IsNotEmpty, IsOptional, MinLength, MaxLength, IsDate } from "class-validator";

export class FeedupDTO {
  
  @ApiProperty({
    description: "ID do feedup em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsUUID()
  id?: string;

  @ApiProperty({
    description: "ID do usuário que está fazendo o feedup em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsUUID()
  id_usersend: string;

  @ApiProperty({
    description: "ID do usuário que está recebendo em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsUUID()
  id_userreceived: string;

  @ApiProperty({
    description: "Username do usuário",
    example: "Fernando",
    required: true
  })
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  username_userreceived: string;

  @ApiProperty({
    description: "Comportamento atrelado a esse Feedup",
    example: "Performa de forma surpreendente e acima do esperado.",
    required: true
  })
  @IsNotEmpty()
  @IsString()
  value: string;

  @ApiProperty({
    description: "Mensagem atrelada a esse Feedup",
    example: "Obrigado por entregar sua Task rápido",
    required: true
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({
    description: "O Feedup é anônimo?",
    example: false,
    required: true
  })
  @IsBoolean()
  isanonymous: boolean;

  @ApiProperty({
    description: "O Feedup é construtivo?",
    example: true,
    required: true
  })
  @IsBoolean()
  isconstructive: boolean;

  @ApiProperty({
    description: "Quantidade de Likes do Post",
    example: 0,
    required: false
  })
  @IsOptional()
  @IsInt()
  likes?: number;

  @ApiProperty({
    description: "Data de Criação do Feedup.",
    example: "2024-05-18T20:03:39.486Z",
    required: false
  })
  @IsOptional()
  @IsDate()
  created_at?: Date;

  @ApiProperty({
    description: "Data de Update do Feedup, caso necessário.",
    example: "2024-05-18T20:03:39.486Z",
    required: false
  })
  @IsOptional()
  @IsDate()
  updated_at?: Date;
}

export class FindAllFeedups{
    id ?: string;
    id_usersend: string;
    id_userreceived: string;
    username_userreceived ?: string;
    value: string;
    message: string;
    isanonymous ?: boolean;
    isconstructive ?: boolean;
    likes: number;
    created_at ?: Date;
    updated_at ?: Date;

  
}