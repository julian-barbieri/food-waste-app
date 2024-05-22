import {
  Body,
  Controller,
  Delete,
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
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { User } from '@prisma/client';
import { UserReq } from 'src/auth/UserReq.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { BrandGuard } from './brand.guard';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandEntity } from './entities/brand.entity';

@Controller('brands')
@ApiTags('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiCreatedResponse({
    type: BrandEntity,
    description: 'The brand has been successfully created.',
  })
  create(@UserReq() user: User, @Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(user.id, createBrandDto);
  }

  @Get()
  @ApiOkResponse({
    type: BrandEntity,
    isArray: true,
    description: 'List all brands',
  })
  async findAll(): Promise<BrandEntity[]> {
    const brands = await this.brandService.findAll();
    return brands.map((brand) => new BrandEntity(brand));
  }

  @Get(':id')
  @ApiOkResponse({
    type: BrandEntity,
    description: 'Get brand by id',
  })
  @ApiNotFoundResponse({
    description: 'Brand not found',
  })
  async findOne(@Param('id') id: string): Promise<BrandEntity> {
    const brand = await this.brandService.findOne(id);

    if (!brand) {
      throw new NotFoundException(`Brand with id = ${id} not found`);
    }

    return new BrandEntity(brand);
  }

  @Patch(':id')
  @UseGuards(BrandGuard)
  @ApiForbiddenResponse({
    description: 'You are not allowed to update this brand',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiOkResponse({
    type: BrandEntity,
    description: 'Update brand by id',
  })
  async update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<BrandEntity> {
    const brand = await this.brandService.update(id, updateBrandDto);
    return new BrandEntity(brand);
  }

  @Delete(':id')
  @UseGuards(BrandGuard)
  @ApiForbiddenResponse({
    description: 'You are not allowed to delete this brand',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiOkResponse({
    type: BrandEntity,
    description: 'Delete brand by id',
  })
  async remove(@Param('id') id: string): Promise<BrandEntity> {
    const brand = await this.brandService.remove(id);
    return new BrandEntity(brand);
  }
}
