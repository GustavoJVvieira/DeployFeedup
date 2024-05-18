import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { FeedupsModule } from './modules/feedups/feedups.module';
import { MoodsModule } from './modules/moods/moods.module';
import { CommentsModule } from './modules/comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { FeedModule } from './modules/feed/feed.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ 
    //config module config
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    UserModule, FeedupsModule, MoodsModule, CommentsModule, AuthModule, DbModule, FeedModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
