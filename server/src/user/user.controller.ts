import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //CREATE USER
  @Post()
  @ApiCreatedResponse({
    type: UserEntity,
    description: 'Create a new user',
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // GET ALL USERS
  @Get()
  @UseGuards(JwtAuthGuard)
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

  //GET USER BY ID
  @Get(':id')
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
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
