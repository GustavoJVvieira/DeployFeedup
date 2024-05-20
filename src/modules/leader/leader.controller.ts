import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { LeaderService } from './leader.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('Leader')
@Controller('leader')
export class LeaderController {
  constructor(private readonly leaderService: LeaderService) {}

  @Get("")
  @ApiResponse({ status: 200, description: 'As informações foram retornadas com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)

  async getLeaderBoard(@User() user : any) {
    return this.leaderService.getLeaderBoard(user);
  }

  @Delete("/:id")
  @ApiResponse({ status: 204, description: 'O Feedup foi excluido com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)
  
  async deleteFeedup(@Param("id") id: string, @User() user : any){
    return this.leaderService.deleteFeedup(id, user);
  }

  @Get("/:username")
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getColaborator(@Param("username") username: string){
    return this.leaderService.getColaborator(username);
  }
}
