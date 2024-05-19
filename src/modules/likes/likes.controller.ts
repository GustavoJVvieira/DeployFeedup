import { Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}


  @Post("/:id")
  @UseGuards(AuthGuard)
  async likePost(@Param("id") id: string, @User() user: any) {
    return await this.likesService.likePost(id, user);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard)
  async deletePost(@Param("id") id: string, @User() user: any) {
    return await this.likesService.dislikePost(id, user);
  }

}
