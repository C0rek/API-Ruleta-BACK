import { Module } from '@nestjs/common';
import { RandomrouletteService } from './randomroulette.service';
import { RandomrouletteController } from './randomroulette.controller';

@Module({
  controllers: [RandomrouletteController],
  providers: [RandomrouletteService],
})
export class RandomrouletteModule {}
