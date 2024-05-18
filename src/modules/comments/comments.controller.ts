import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsDTO } from './comments.dto';
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard) // Autorization Guard User
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  
  @Post()
  createComment(@Body() comments: CommentsDTO) {
    this.commentsService.createComment(comments);
  }

  @Get('/:id')
  findById(@Param('id') id: string): CommentsDTO {
      return this.commentsService.findById(id);
  }

  @Put()
  updateUser(@Body() comments: CommentsDTO) {
      this.commentsService.updateComment(comments);
  }

  @Get()
  findAll() {
     console.log(this.commentsService);
  }

  @Delete("/:id")
  deleteComment(@Param("id") id : string) {
      this.commentsService.deleteComment(id);
  }
}
