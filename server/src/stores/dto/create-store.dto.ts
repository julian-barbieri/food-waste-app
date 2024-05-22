import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateStoreDto {
    
    @ApiProperty()
    @IsString()
    brandId: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsOptional()
    isActive?: boolean = true;

}
