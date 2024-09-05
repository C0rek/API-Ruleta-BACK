import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {
    const timestamp = new Date().toISOString();
    console.log(`Request Timestamp: ${timestamp}`);
    next();
  }
}
