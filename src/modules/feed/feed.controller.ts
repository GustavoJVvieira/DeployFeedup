import { Controller, Delete, Get, NotFoundException, Param, Req, UseGuards } from '@nestjs/common';
import { FeedService } from './feed.service';
import { User } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';


@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Home Page')
@Controller('home')

export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'O Feedup foi retornado com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()
  
  @UseGuards(AuthGuard)

  async findAll() {
    return this.feedService.findAll();
  }

  @Delete('/:id')
  @ApiResponse({ status: 204, description: 'O Feedup foi excluido com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)

  async deleteFeedup(@Param('id') id: string, @User() user: any) {
    const deleted = await this.feedService.deleteFeedup(id, user);

    if (!deleted) {
      throw new NotFoundException('Feedup not found or you do not have permission to delete it');
    }

    return { message: 'Feedup deleted successfully' };
  }
}


