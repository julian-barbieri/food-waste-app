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
        userId: createStoreDto.userId,
        name: createStoreDto.name,
        description: createStoreDto.description,
        logoUrl: createStoreDto.logoUrl,
        backgroundPhotoUrl: createStoreDto.backgroundPhotoUrl,
        address: createStoreDto.address,
        isActive: createStoreDto.isActive,
        latitude: 100,
        longitude: 100,
      },
    });
  }

  findAll() {
    return this.prisma.store.findMany({
      include: {
        products: true,
      }
    });
  }

  findActiveStores(){
    return this.prisma.store.findMany({ 
      where: { isActive: true },
      include: {
        products: true,
      }
    });
  }

  findOne(id: string) {
    return this.prisma.store.findUnique({
      where: { id },
      include: {
        products: true,
      }
    });
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
