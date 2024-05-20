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
import { ProfileModule } from './modules/profile/profile.module';
import { LikesModule } from './modules/likes/likes.module';
import { LeaderModule } from './modules/leader/leader.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guard/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { PeopleModule } from './modules/people/people.module';

@Module({
  imports: [ 
    //config module config
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    UserModule, FeedupsModule, MoodsModule, CommentsModule, AuthModule, DbModule, FeedModule, 
    ProfileModule, LikesModule, LeaderModule, JwtModule, PeopleModule],

  controllers: [AppController],
  providers: [AppService,   {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class AppModule {}
