import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './users.entity';
import { FeedbackEntity } from './feedups.entity';


@Entity('likes')
export class LikesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    id_user: string;

    @Column('uuid')
    id_feedup: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'id_user' })
    user: UserEntity;

    @ManyToOne(() => FeedbackEntity)
    @JoinColumn({ name: 'id_feedup' })
    feedup: FeedbackEntity;
}