import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Brand, Prisma } from '@prisma/client';


@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}
  create(createBrandDto: CreateBrandDto) {
    return 'This action adds a new brand';
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  findOne(id: string) {
    return this.prisma.brand.findUnique({ where: {id}});
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
