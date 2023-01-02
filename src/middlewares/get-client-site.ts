import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
const geoip = require('geoip-country');

@Injectable()
export class SiteMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    var geo = geoip.lookup(req.ip);

    switch (geo?.country) {
      case 'AR': {
        req.body.sites = 'MLA';
        break;
      }
      case 'BR': {
        req.body.sites = 'MLB';
        break;
      }
      case 'UY': {
        req.body.sites = 'MLU';
        break;
      }
      default: {
        req.body.sites = 'MLA';
        break;
      }
    }
    next();
  }
}
