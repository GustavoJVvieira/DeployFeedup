import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsUUID, IsString, IsEmail, IsInt, Min, IsBoolean, Max } from 'class-validator';
import bcrypt from 'bcrypt';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'varchar' })
  @IsString()
  password: string;

  @Column({ type: 'varchar' })
  @IsString()
  username: string;

  @Column({ type: 'varchar' })
  @IsString()
  name: string;

  @Column({ type: 'varchar' })
  @IsEmail()
  email: string;

  @Column({ type: 'varchar' })
  @IsString()
  role: string;

  @Column({ type: 'int' })
  @IsInt()
  @Min(0)
  coin: number;

  @Column({ type: 'int' })
  @IsInt()
  @Min(0)
  @Max(3)
  typeuser: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}