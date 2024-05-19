import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsDTO } from './comments.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';


@UseGuards(AuthGuard) // Autorization Guard User
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  
  @Post("/:id")
  @UseGuards(AuthGuard)
  createComment(@Body() comments: CommentsDTO, @User() user: any, @Param("id") id: string) {
    this.commentsService.createComment(comments, user, id);
  }

  @Get('/:id')
  findById(@Param('id') id: string){
      return this.commentsService.findById(id);
  }


  @Delete("/:id")
  deleteComment(@Param("id") id : string, @User() user: any) {
      this.commentsService.deleteComment(id, user);
  }
  
}
