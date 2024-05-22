import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRootAsync({
            useFactory: async (ConfigService: ConfigService) =>({
                
        type: 'postgres',
         host : 'ec2-44-194-102-142.compute-1.amazonaws.com',
        username: "aguuguykuviude",
        port:5432,
        password:"7e33984050398a7b7a4f763de19d9808932966d04b5d90060186e359bd53c9a1" ,
        database:"d1v0jcv0cbpt27" , 
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
