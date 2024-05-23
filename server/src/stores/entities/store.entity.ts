import { Store } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';
import { BrandEntity } from "src/brand/entities/brand.entity";

export class StoreEntity implements Store {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    brandId: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    longitude: number;

    @ApiProperty()
    isActive: boolean;
    
    @ApiProperty()
    brand: BrandEntity;

    constructor({brand, ...data }: Partial<StoreEntity>) {
        
        Object.assign(this, data);
        
        if (brand) {
            this.brand = new BrandEntity(brand);
        }
    }

}
