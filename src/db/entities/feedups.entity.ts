import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './users.entity';
 // Importe a entidade User se ela já existir

@Entity('feedbacks')
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id ?: string;

  @Column({ type: 'uuid' })
  id_usersend: string;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'id_usersend' })
  userSend ?: UserEntity;

  @Column({type: "varchar"})
  username_userreceived ?: string;

  @ManyToOne(() => UserEntity, user => user.username)
  @JoinColumn({ name: 'id_usersend' })
  userReceivedName ?: UserEntity;

  @Column({ type: 'uuid' })
  id_userreceived : string;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'id_userreceived' })
  userReceived ?: UserEntity;

  @Column({ type: 'varchar' })
  value: string;

  @Column({ type: 'varchar' })
  message: string;

  @Column({ type: 'boolean' })
  isanonymous ?: boolean;

  @Column({ type: 'boolean' })
  isconstructive ?: boolean;

  @Column({ type: 'int', default: 0 })
  likes: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at ?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at ?: Date;
}