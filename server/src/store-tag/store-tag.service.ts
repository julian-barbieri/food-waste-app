import { Injectable } from '@nestjs/common';
import { CreateStoreTagDto } from './dto/create-store-tag.dto';
import { UpdateStoreTagDto } from './dto/update-store-tag.dto';

@Injectable()
export class StoreTagService {
  create(createStoreTagDto: CreateStoreTagDto) {
    return 'This action adds a new storeTag';
  }

  findAll() {
    return `This action returns all storeTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeTag`;
  }

  update(id: number, updateStoreTagDto: UpdateStoreTagDto) {
    return `This action updates a #${id} storeTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeTag`;
  }
}
