import { Test, TestingModule } from '@nestjs/testing';
import { TypePersonsService } from './type-persons.service';

describe('TypePersonsService', () => {
  let service: TypePersonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypePersonsService],
    }).compile();

    service = module.get<TypePersonsService>(TypePersonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
