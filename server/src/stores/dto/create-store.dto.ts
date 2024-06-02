import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ProductEntity } from 'src/product/entities/product.entity';

export class CreateStoreDto {
    
    @ApiProperty()
    @IsString()
    userId: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    logoUrl: string;

    @ApiProperty()
    @IsString()
    backgroundPhotoUrl: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsOptional()
    isActive?: boolean = true;

    @ApiProperty({ type: [ProductEntity] })
    @IsArray()
    products: ProductEntity[];


}
