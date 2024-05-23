import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';
import { StoreEntity } from 'src/stores/entities/store.entity';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  //GET ALL
  @Get()
  @ApiOkResponse({
    type: ProductEntity,
    isArray: true,
    description: 'List all products',
  })
  async findAll(): Promise<ProductEntity[]> {
    const products = await this.productService.findAll();
    return products.map((product) => new ProductEntity(product));
  }

   //GET BY ID
   @Get(':id')
   @ApiOkResponse({
     type: ProductEntity,
     description: 'Get product by id',
   })
   @ApiNotFoundResponse({
     description: 'Product not found',
   })
   async findOne(@Param('id') id: string): Promise<ProductEntity> {
     const product = await this.productService.findOne(id);
     if (!product) {
       throw new NotFoundException(`Product with id = ${id} not found`);
     }
     return new ProductEntity(product);
   }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
