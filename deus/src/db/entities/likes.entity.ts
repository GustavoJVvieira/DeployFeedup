import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsUUID, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserEntity } from './users.entity';
import { FeedbackEntity } from './feedups.entity';

@Entity('likes')
export class LikesEntity {
    @PrimaryGeneratedColumn('uuid')
    @IsUUID()
    id: string;

    @Column('uuid')
    @IsUUID()
    id_user: string;

    @Column('uuid')
    @IsUUID()
    id_feedup: string;

    @CreateDateColumn()
    @IsDate()
    created_at: Date;

    @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP' })
    @IsDate()
    updated_at: Date;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'id_user' })
    @ValidateNested()
    @Type(() => UserEntity)
    user: UserEntity;

    @ManyToOne(() => FeedbackEntity)
    @JoinColumn({ name: 'id_feedup' })
    @ValidateNested()
    @Type(() => FeedbackEntity)
    feedup: FeedbackEntity;
}