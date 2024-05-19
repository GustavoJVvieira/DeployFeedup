import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { LeaderService } from './leader.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';

@UseGuards(AuthGuard)
@Controller('leader')
export class LeaderController {
  constructor(private readonly leaderService: LeaderService) {}

  @Get("")
  @UseGuards(AuthGuard)
  async getLeaderBoard(@User() user : any) {
    return this.leaderService.getLeaderBoard(user);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard)
  async deleteFeedup(@Param("id") id: string, @User() user : any){
    return this.leaderService.deleteFeedup(id, user);
  }

  @Get("/:username")
  @UseGuards(AuthGuard)
  async getColaborator(@Param("username") username: string){
    return this.leaderService.getColaborator(username);
  }
}
