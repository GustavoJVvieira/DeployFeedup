import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { PeopleService } from './people.service';
import { ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/enum/user-type.enum';

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}
  
  @Get("")
  @Roles(UserType.People)
  
  @ApiResponse({ status: 200, description: 'As informações foram retornadas com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)

  async getLeaderBoard(@User() user : any) {
    return this.peopleService.getLeaderBoard(user);
  }

  @Delete("/:id")
  @Roles(UserType.People)

  @ApiResponse({ status: 204, description: 'O Feedup foi excluido com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)
  
  async deleteFeedup(@Param("id") id: string, @User() user : any){
    return this.peopleService.deleteFeedup(id, user);
  }

  @Get("/:username")
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getColaborator(@Param("username") username: string){
    return this.peopleService.getColaborator(username);
  }
}
