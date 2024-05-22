import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, createBrandDto: CreateBrandDto) {
    return this.prisma.brand.create({
      data: {
        ...createBrandDto,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  findOne(id: string) {
    return this.prisma.brand.findUnique({
      where: { id },
    });
  }

  update(id: string, data: Prisma.BrandUpdateInput) {
    return this.prisma.brand.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.brand.delete({
      where: { id },
    });
  }
}
