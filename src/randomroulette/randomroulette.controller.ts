import { Controller, Post } from '@nestjs/common';
import { RandomrouletteService } from './randomroulette.service';

@Controller('randomroulette')
export class RandomrouletteController {
  @Post()
  generateRandomNumber():{value:number}{
    const value = Math.floor(Math.random() * 100 + 1);
    return {value};
  }
}
