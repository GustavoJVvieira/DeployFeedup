import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { FeedbackEntity } from './feedups.entity';
import { UserEntity } from './users.entity';

@Entity('comments')
export class CommentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  id_feedup: string;

  @ManyToOne(() => FeedbackEntity, feedback => feedback.id)
  @JoinColumn({ name: 'id_feedup' })
  feedback: FeedbackEntity;

  @Column({ type: 'uuid' })
  id_usercommented: string;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'id_usercommented' })
  userCommented: UserEntity;

  @Column({ type: 'varchar' })
  message: string;

  @Column({ type: 'int', default: 0 })
  like: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}