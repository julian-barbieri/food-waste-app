import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { StoreEntity } from './entities/store.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('stores')
@ApiTags('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  //TODO: Verificar que el dueño del brand pueda crear un store con su brandId
  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiCreatedResponse({
    type: StoreEntity,
    description: 'The store has been successfully created.',
  })
  async create(@Body() createStoreDto: CreateStoreDto) {
    const store = await this.storesService.create(createStoreDto);
    return new StoreEntity(store);
  }

  //
  @Get()
  @ApiOkResponse({
    type: StoreEntity,
    isArray: true,
    description: 'List all stores',
  })
  async findAll(): Promise<StoreEntity[]> {
    const stores = await this.storesService.findAll();
    return stores.map((store) => new StoreEntity(store));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(+id);
  }
}
