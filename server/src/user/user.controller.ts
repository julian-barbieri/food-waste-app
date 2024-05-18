import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { User } from '@prisma/client';
import { UserReq } from 'src/auth/UserReq.decorator';
import { UseJwtAuthGuards } from 'src/auth/jwt-auth.guard';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({
    type: UserEntity,
    description: 'Create a new user',
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseJwtAuthGuards()
  @ApiBearerAuth()
  @ApiOkResponse({
    type: UserEntity,
    isArray: true,
    description: 'List all users',
  })
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':id')
  @UseJwtAuthGuards()
  @ApiBearerAuth()
  @ApiOkResponse({
    type: UserEntity,
    description: 'Get user by id',
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  async findOne(@Param('id') id: string): Promise<UserEntity> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with id = ${id} not found`);
    }

    return new UserEntity(user);
  }

  @Patch()
  @UseJwtAuthGuards()
  @ApiBearerAuth()
  @ApiOkResponse({
    type: UserEntity,
    description: 'Update user',
  })
  async update(
    @UserReq() userReq: User,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.userService.update(userReq.id, updateUserDto);
    return new UserEntity(user);
  }
}
