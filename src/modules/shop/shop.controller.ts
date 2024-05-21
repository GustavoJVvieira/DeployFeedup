import { Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { User } from 'src/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}


  @Put("/")
  @UseGuards(AuthGuard)
  shopcoins(@User() user: any) {
    return this.shopService.shopcoins(user.sub);
  }

}
