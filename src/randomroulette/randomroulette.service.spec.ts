import { Test, TestingModule } from '@nestjs/testing';
import { RandomrouletteService } from './randomroulette.service';

describe('RandomrouletteService', () => {
  let service: RandomrouletteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomrouletteService],
    }).compile();

    service = module.get<RandomrouletteService>(RandomrouletteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
