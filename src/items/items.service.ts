import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { SearchQueryDTO } from './DTOs/search-query.dto';

@Injectable()
export class ItemsService {
  constructor(private configService: ConfigService) {}
  async searchItems(req, q: string) {
    const response = await axios({
      url: `${this.configService.get<string>('API_MELI_URL')}/sites/${
        req.body.sites
      }/search?q=${q}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  }
}
