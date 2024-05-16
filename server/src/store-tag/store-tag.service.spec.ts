import { Test, TestingModule } from '@nestjs/testing';
import { StoreTagService } from './store-tag.service';

describe('StoreTagService', () => {
  let service: StoreTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreTagService],
    }).compile();

    service = module.get<StoreTagService>(StoreTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
