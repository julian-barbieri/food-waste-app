import { Test, TestingModule } from '@nestjs/testing';
import { UserFavoriteStoreController } from './user-favorite-store.controller';
import { UserFavoriteStoreService } from './user-favorite-store.service';

describe('UserFavoriteStoreController', () => {
  let controller: UserFavoriteStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFavoriteStoreController],
      providers: [UserFavoriteStoreService],
    }).compile();

    controller = module.get<UserFavoriteStoreController>(UserFavoriteStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
