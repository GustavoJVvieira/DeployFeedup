import { Body, Controller, Delete, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { LeaderService } from './leader.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles, User } from 'src/decorators/roles.decorator';
import { UserType } from 'src/enum/user-type.enum';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@UseGuards(AuthGuard)
@ApiTags('Leader')
@Controller('leader')
export class LeaderController {
  constructor(private readonly leaderService: LeaderService) {}

  @Get("")

  @Roles(UserType.Leader)

  @ApiResponse({ status: 200, description: 'As informações foram retornadas com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)
  
  @UseInterceptors(CacheInterceptor)
  async getLeaderBoard(@User() user : any) {
    return this.leaderService.getLeaderBoard(user);
  }

  @Delete("/:id")
  @Roles(UserType.Leader)

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
  async getColaborator(@Param("username") username: string, @User() user : any){
    return this.leaderService.getColaborator(username, user);
  }
}
