import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRootAsync({
            useFactory: async (ConfigService: ConfigService) =>({
                
        type: 'postgres',
        host : process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        port:5432,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE, 
    entities: [UserEntity, FeedbackEntity, MoodsEntity, CommentsEntity],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
      ssl: true, 
        extra: { "ssl": 
        { "rejectUnauthorized": false }
                }

            }),

            inject: [ConfigService],

    })],

    controllers: [],
    providers: [],
})
export class DbModule {}
