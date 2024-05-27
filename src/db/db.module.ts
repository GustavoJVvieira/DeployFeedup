import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRootAsync({
         useFactory: async (ConfigService: ConfigService) =>({
                
        type: 'postgres',
         host : 'ec2-52-3-19-42.compute-1.amazonaws.com',
        username: "mvkarluiunqqee",
        port:5432,
        password:"5345087ca0a9fb475b0653868b804c0359c45139bb556af09f9f93a3406d9262" ,
        database:"da8qqc3r1bk5d0" , 
   entities: [__dirname + '/entities/**'],
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
