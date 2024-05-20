import { ConfigService } from "@nestjs/config";
import {config} from "dotenv"
import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "../db/entities/users.entity";
import { FeedbackEntity } from "../db/entities/feedups.entity";
import { MoodsEntity } from "../db/entities/moods.entity";
import { CommentsEntity } from "../db/entities/comments.entity";

config();

const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: +configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: [UserEntity, FeedbackEntity, MoodsEntity, CommentsEntity],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false
};


export default new DataSource(dataSourceOptions);