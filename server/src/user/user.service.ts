import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { HashService } from 'src/hash/hash.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private hashService: HashService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.hashService.hashPassword(
      createUserDto.password,
    );

    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        hashedPassword: hashedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user: Prisma.UserUpdateInput = {
      email: updateUserDto.email,
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName,
    };

    if (updateUserDto.password) {
      user.hashedPassword = await this.hashService.hashPassword(
        updateUserDto.password,
      );
    }

    // remove undefined values
    Object.keys(user).forEach(
      (key) => user[key] === undefined && delete user[key],
    );

    return this.prisma.user.update({
      where: { id },
      data: user,
    });
  }
}
