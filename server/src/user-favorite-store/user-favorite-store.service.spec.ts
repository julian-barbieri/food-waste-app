import { Test, TestingModule } from '@nestjs/testing';
import { UserFavoriteStoreService } from './user-favorite-store.service';

describe('UserFavoriteStoreService', () => {
  let service: UserFavoriteStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFavoriteStoreService],
    }).compile();

    service = module.get<UserFavoriteStoreService>(UserFavoriteStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
