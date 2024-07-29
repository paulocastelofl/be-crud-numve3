import { Test, TestingModule } from '@nestjs/testing';
import { TypePersonsController } from './type-persons.controller';
import { TypePersonsService } from './type-persons.service';

describe('TypePersonsController', () => {
  let controller: TypePersonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypePersonsController],
      providers: [TypePersonsService],
    }).compile();

    controller = module.get<TypePersonsController>(TypePersonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
