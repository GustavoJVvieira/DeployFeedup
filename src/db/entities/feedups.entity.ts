import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsUUID, IsString, IsNotEmpty, IsBoolean, IsInt, Min } from 'class-validator';
import { UserEntity } from './users.entity';

@Entity('feedbacks')
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'uuid' })
  @IsUUID()
  id_usersend: string;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'id_usersend' })
  userSend: UserEntity;

  @Column({ type: 'varchar' })
  @IsString()
  @IsNotEmpty()
  username_userreceived: string;

  @ManyToOne(() => UserEntity, user => user.username)
  @JoinColumn({ name: 'id_userreceived' })
  userReceivedName: UserEntity;

  @Column({ type: 'uuid' })
  @IsUUID()
  id_userreceived: string;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'id_userreceived' })
  userReceived: UserEntity;

  @Column({ type: 'varchar' })
  @IsString()
  @IsNotEmpty()
  value: string;

  @Column({ type: 'varchar' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @Column({ type: 'boolean' })
  @IsBoolean()
  isanonymous: boolean;

  @Column({ type: 'boolean' })
  @IsBoolean()
  isconstructive: boolean;

  @Column({ type: 'int', default: 0 })
  @IsInt()
  @Min(0)
  likes: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}