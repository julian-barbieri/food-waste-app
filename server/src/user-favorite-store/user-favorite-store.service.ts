import { Injectable } from '@nestjs/common';
import { CreateUserFavoriteStoreDto } from './dto/create-user-favorite-store.dto';
import { UpdateUserFavoriteStoreDto } from './dto/update-user-favorite-store.dto';

@Injectable()
export class UserFavoriteStoreService {
  create(createUserFavoriteStoreDto: CreateUserFavoriteStoreDto) {
    return 'This action adds a new userFavoriteStore';
  }

  findAll() {
    return `This action returns all userFavoriteStore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userFavoriteStore`;
  }

  update(id: number, updateUserFavoriteStoreDto: UpdateUserFavoriteStoreDto) {
    return `This action updates a #${id} userFavoriteStore`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFavoriteStore`;
  }
}
