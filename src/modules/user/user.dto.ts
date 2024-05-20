import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "src/db/entities/users.entity";

export class UserDTO {

  @ApiProperty({
    description: "ID do usuário em formato UUID.",
    example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    required: false
  })
  @IsUUID("4", { message: "O ID deve estar em formato UUIDv4." })
  @IsOptional()
  id ?: string;

  @ApiProperty({
    description: "Senha do usuário.",
    example: "Senha@123",
    required: true
  })
  @IsNotEmpty({ message: "A senha é obrigatória." })
  @MinLength(3, { message: "A senha deve ter pelo menos 3 caracteres." })
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
    description: "Qual o tipo de Usuário? 1- Usuário Comum 2-Líder 3-People",
    example: 1,
    required: true
  })
  @IsNotEmpty({ message: "A informação sobre o tipo de usuario é obrigatória." })
  typeuser: number;
  
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
  @IsOptional()
  updated_at?: Date;

}


export class LoginPayload {
  sub: string;
  typeuser: number;

  constructor(user: UserEntity) {
    this.sub = user.id;
    this.typeuser = user.typeuser;
  }
}