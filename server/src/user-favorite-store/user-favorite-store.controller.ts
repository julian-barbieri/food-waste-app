import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserFavoriteStoreService } from './user-favorite-store.service';
import { CreateUserFavoriteStoreDto } from './dto/create-user-favorite-store.dto';
import { UpdateUserFavoriteStoreDto } from './dto/update-user-favorite-store.dto';

@Controller('user-favorite-store')
export class UserFavoriteStoreController {
  constructor(private readonly userFavoriteStoreService: UserFavoriteStoreService) {}

  @Post()
  create(@Body() createUserFavoriteStoreDto: CreateUserFavoriteStoreDto) {
    return this.userFavoriteStoreService.create(createUserFavoriteStoreDto);
  }

  @Get()
  findAll() {
    return this.userFavoriteStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userFavoriteStoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserFavoriteStoreDto: UpdateUserFavoriteStoreDto) {
    return this.userFavoriteStoreService.update(+id, updateUserFavoriteStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFavoriteStoreService.remove(+id);
  }
}
