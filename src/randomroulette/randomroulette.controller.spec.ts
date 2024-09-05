import { Test, TestingModule } from '@nestjs/testing';
import { RandomrouletteController } from './randomroulette.controller';
import { RandomrouletteService } from './randomroulette.service';

describe('RandomrouletteController', () => {
  let controller: RandomrouletteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomrouletteController],
      providers: [RandomrouletteService],
    }).compile();

    controller = module.get<RandomrouletteController>(RandomrouletteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
