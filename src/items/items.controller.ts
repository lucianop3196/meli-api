import { Controller, Get, Query, Request } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller()
export class ItemsController {
  constructor(private itemsService: ItemsService) {}
  @Get('')
  async login(@Query('q') q: string, @Request() req: Request) {
    return await this.itemsService.searchItems(req, q);
  }
}
