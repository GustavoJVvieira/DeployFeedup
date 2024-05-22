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
};


export default new DataSource(dataSourceOptions);
