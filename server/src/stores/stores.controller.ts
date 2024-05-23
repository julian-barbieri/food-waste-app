import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { CreateStoreDto } from './dto/create-store.dto';
import { FindAllStoresQuery } from './dto/find-all.query';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreEntity } from './entities/store.entity';
import { StoresService } from './stores.service';

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

  //GET ALL
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

  //GET ALL
  @Get('/activeStores')
  @ApiOkResponse({
    type: StoreEntity,
    isArray: true,
    description: 'List all ACTIVE stores',
  })
  async findActiveStores(): Promise<StoreEntity[]> {
    const stores = await this.storesService.findActiveStores();
    return stores.map((store) => new StoreEntity(store));
  }

  //GET BY ID
  @Get(':id')
  @ApiOkResponse({
    type: StoreEntity,
    description: 'Get store by id',
  })
  @ApiNotFoundResponse({
    description: 'Store not found',
  })
  async findOne(@Param('id') id: string): Promise<StoreEntity> {
    const store = await this.storesService.findOne(id);
    if (!store) {
      throw new NotFoundException(`Store with id = ${id} not found`);
    }
    return new StoreEntity(store);
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
