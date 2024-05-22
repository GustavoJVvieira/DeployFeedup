import { ConfigService } from "@nestjs/config";
import {config} from "dotenv"
import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "./entities/users.entity";
import { FeedbackEntity } from "./entities/feedups.entity";
import { MoodsEntity } from "./entities/moods.entity";
import { CommentsEntity } from "./entities/comments.entity";

<<<<<<< HEAD

=======
>>>>>>> a72240516b0f14f390ea73b2319fcab8dc4eba57
config();

const configService = new ConfigService();

<<<<<<< HEAD
    const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        url: "postgres://bomsjbhmgrsimv:946248d01eae7f37f6478cc7304001fa77164ca84b96300b464a712491eeeda7@ec2-44-194-102-142.compute-1.amazonaws.com:5432/d9gemefgkthods",
        entities: [UserEntity, FeedbackEntity, MoodsEntity, CommentsEntity],
        migrations: [__dirname + '/migrations/*.ts'],
        synchronize: false,
        ssl: true, 
=======
const dataSourceOptions: DataSourceOptions = {
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
>>>>>>> a72240516b0f14f390ea73b2319fcab8dc4eba57
        extra: { "ssl": 
        { "rejectUnauthorized": false }
    }
};


<<<<<<< HEAD
export default new DataSource(dataSourceOptions);
=======
export default new DataSource(dataSourceOptions);
>>>>>>> a72240516b0f14f390ea73b2319fcab8dc4eba57
