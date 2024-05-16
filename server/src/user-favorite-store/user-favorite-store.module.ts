import { Module } from '@nestjs/common';
import { UserFavoriteStoreService } from './user-favorite-store.service';
import { UserFavoriteStoreController } from './user-favorite-store.controller';

@Module({
  controllers: [UserFavoriteStoreController],
  providers: [UserFavoriteStoreService],
})
export class UserFavoriteStoreModule {}
