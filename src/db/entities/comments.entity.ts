import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsUUID, IsNotEmpty, IsString, IsInt, MinLength } from 'class-validator';
import { FeedbackEntity } from './feedups.entity';
import { UserEntity } from './users.entity';

@Entity('comments')
export class CommentsEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'uuid' })
  @IsUUID()
  id_feedup: string;

  @ManyToOne(() => FeedbackEntity, feedback => feedback.id)
  @JoinColumn({ name: 'id_feedup' })
  feedback: FeedbackEntity;

  @Column({ type: 'uuid' })
  @IsUUID()
  id_usercommented: string;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'id_usercommented' })
  userCommented: UserEntity;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  message: string;

  @Column({ type: 'int', default: 0 })
  @IsInt()
  like: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}