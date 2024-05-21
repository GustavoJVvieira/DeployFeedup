import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsUUID, IsInt, Min } from 'class-validator';
import { UserEntity } from './users.entity';

@Entity('user_moods')
export class MoodsEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'uuid' })
  @IsUUID()
  id_user: string;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'id_user' })
  user: UserEntity;

  @Column({ type: 'int' })
  @IsInt()
  @Min(0)
  moods: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}