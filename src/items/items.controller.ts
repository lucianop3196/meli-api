import { Controller, Get, Query, Request } from '@nestjs/common';
import { SearchQueryDTO } from './DTOs/search-query.dto';
import { ItemsService } from './items.service';

@Controller()
export class ItemsController {
  constructor(private itemsService: ItemsService) {}
  @Get('')
  async login(@Query() query: SearchQueryDTO, @Request() req: Request) {
    return await this.itemsService.searchItems(req, query.q);
  }
}
