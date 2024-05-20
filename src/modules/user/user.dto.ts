import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {

  @ApiProperty({
    description: "ID do usuário em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsUUID("4", { message: "O ID deve estar em formato UUIDv4." })
  id?: string;

  @ApiProperty({
    description: "Senha do usuário.",
    example: "Senha@123",
    required: true
  })
  @IsNotEmpty({ message: "A senha é obrigatória." })
  @MinLength(8, { message: "A senha deve ter pelo menos 8 caracteres." })
  password: string;

  @ApiProperty({
    description: "Username do Usuário, único e usado como chave estrangeira em outros DTOs.",
    example: "Guto",
    required: true
  })
  @IsNotEmpty({ message: "O username é obrigatório." })
  username: string;

  @ApiProperty({
    description: "Nome do Usuário.",
    example: "Gustavo José Vieira",
    required: true
  })
  @IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;

  @ApiProperty({
    description: "Email do Usuário, deve conter @ioasys.com.",
    example: "gustavo@ioasys.com",
    required: true
  })
  @IsNotEmpty({ message: "O email é obrigatório." })
  @IsEmail({}, { message: "O email deve ser válido." })
  email: string;

  @ApiProperty({
    description: "Função do usuário.",
    example: "Back-End",
    required: true
  })
  @IsNotEmpty({ message: "A função é obrigatória." })
  role: string;

  @ApiProperty({
    description: "Quantidade de nozes do usuário.",
    example: 2000,
    required: false
  })
  @IsOptional()
  @IsNumber({}, { message: "A quantidade de nozes deve ser um número." })
  coin?: number;

  @ApiProperty({
    description: "O Usuário é um líder?",
    example: true,
    required: true
  })
  @IsNotEmpty({ message: "A informação sobre ser líder é obrigatória." })
  leader: boolean;

  @ApiProperty({
    description: "O Usuário é do time de people?",
    example: true,
    required: true
  })
  @IsNotEmpty({ message: "A informação sobre ser do time de people é obrigatória." })
  people: boolean;
  
  @ApiProperty({
    description: "Data de Criação do Usuário.",
    example: "2024-05-18T20:03:39.486Z",
    required: false
  })
  created_at?: Date;
  
  @ApiProperty({
    description: "Data de Update do Usuário.",
    example: "2024-05-18T20:03:39.486Z",
    required: false
  })
  @IsNotEmpty({ message: "A data de atualização é obrigatória." })
  updated_at?: Date;

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



