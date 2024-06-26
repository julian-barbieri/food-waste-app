import { Injectable } from '@nestjs/common';

import { PrismaService } from 'nestjs-prisma';

import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}

  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({
      data: {
        address: createStoreDto.address,
        isActive: createStoreDto.isActive,
        latitude: 100,
        longitude: 100,
        brand: {
          connect: {
            id: createStoreDto.brandId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
