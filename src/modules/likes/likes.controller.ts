import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}


  @Post("/:id")
  @ApiResponse({ status: 201, description: 'O Like foi enviado com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()
  
  @UseGuards(AuthGuard)
  
  async likePost(@Param("id") id: string, @User() user: any) {
    return await this.likesService.likePost(id, user);
  }

  @Delete("/:id")
  @ApiResponse({ status: 204, description: 'Foi feito o dislike com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)
  
  async deletePost(@Param("id") id: string, @User() user: any) {
    return await this.likesService.dislikePost(id, user);
  }

}
