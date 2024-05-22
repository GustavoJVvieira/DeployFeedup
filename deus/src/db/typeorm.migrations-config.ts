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
    url: "postgres://bomsjbhmgrsimv:946248d01eae7f37f6478cc7304001fa77164ca84b96300b464a712491eeeda7@ec2-44-194-102-142.compute-1.amazonaws.com:5432/d9gemefgkthods",
    entities: [UserEntity, FeedbackEntity, MoodsEntity, CommentsEntity],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false
};


export default new DataSource(dataSourceOptions);
