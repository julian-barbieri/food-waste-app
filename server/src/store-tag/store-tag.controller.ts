import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreTagService } from './store-tag.service';
import { CreateStoreTagDto } from './dto/create-store-tag.dto';
import { UpdateStoreTagDto } from './dto/update-store-tag.dto';

@Controller('store-tag')
export class StoreTagController {
  constructor(private readonly storeTagService: StoreTagService) {}

  @Post()
  create(@Body() createStoreTagDto: CreateStoreTagDto) {
    return this.storeTagService.create(createStoreTagDto);
  }

  @Get()
  findAll() {
    return this.storeTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreTagDto: UpdateStoreTagDto) {
    return this.storeTagService.update(+id, updateStoreTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeTagService.remove(+id);
  }
}
