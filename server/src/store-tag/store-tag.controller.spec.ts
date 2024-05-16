import { Test, TestingModule } from '@nestjs/testing';
import { StoreTagController } from './store-tag.controller';
import { StoreTagService } from './store-tag.service';

describe('StoreTagController', () => {
  let controller: StoreTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreTagController],
      providers: [StoreTagService],
    }).compile();

    controller = module.get<StoreTagController>(StoreTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
