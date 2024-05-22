import { ConfigService } from "@nestjs/config";
import {config} from "dotenv"
import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "./entities/users.entity";
import { FeedbackEntity } from "./entities/feedups.entity";
import { MoodsEntity } from "./entities/moods.entity";
import { CommentsEntity } from "./entities/comments.entity";

config();

const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
   type: 'postgres',
        host : 'localhost',
        username: "postgres",
        port:5432,
        password:"admin" ,
        database:"feedup_teste2" , 
    entities: [UserEntity, FeedbackEntity, MoodsEntity, CommentsEntity],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false
};


export default new DataSource(dataSourceOptions);
