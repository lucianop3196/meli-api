import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ItemsService {
  constructor(private configService: ConfigService) {}
  async searchItems(req: Request, q: string) {
    // const response = await axios({
    //   url: `${this.configService.get<string>('API_MELI_URL')}/sites/MLA`,
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    console.log(req.body, q);
    return 'ok';
  }
}
