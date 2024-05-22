import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsDTO } from './dto/comments.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/roles.decorator';


@UseGuards(AuthGuard)
@ApiTags('Comments') 
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  
  @Post("/:id")

  @ApiResponse({ status: 201, description: 'O Comentário foi adicionado com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)

  createComment(
    @Body() message: string, @User() user: any, @Param("id") id: string
  ) {
    this.commentsService.createComment(message, user, id);
  }

  @Get('/:id')

  @ApiResponse({ status: 200, description: 'O Comentário foi retornado com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)

  async findById(@Param('id') id: string) {
    const comment = await this.commentsService.findById(id);

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    return comment;
  }

  @Delete("/:id")
  @ApiResponse({ status: 204, description: 'O Comentário foi deletado com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)

  async deleteComment(@Param("id") id : string, @User() user: any) {
    const deleted = await this.commentsService.deleteComment(id, user);
    if (!deleted) {
      throw new NotFoundException('Comment not found or you do not have permission to delete it');
    }
    return deleted;
  }  
}