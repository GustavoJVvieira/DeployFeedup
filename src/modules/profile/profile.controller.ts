import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @UseGuards(AuthGuard)
  findUser(@User() user: any){
    return this.profileService.findUser(user);
    
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async deleteFeedup(@Param('id') id: string, @User() user: any){
    
    return this.profileService.deleteFeedup(id, user);

  }

}
