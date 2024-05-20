import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Foi feito a chamada com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()

  @UseGuards(AuthGuard)

  findUser(@User() user: any){
    return this.profileService.findUser(user);
    
  }

  @Delete('/:id')
  @ApiResponse({ status: 204, description: 'Foi feito o delete  com sucesso'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiBearerAuth()
  
  @UseGuards(AuthGuard)

  async deleteFeedup(@Param('id') id: string, @User() user: any){
    
    return this.profileService.deleteFeedup(id, user);

  }

}
