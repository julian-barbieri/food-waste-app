import { Store } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

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

    constructor({ ...data }: Partial<StoreEntity>) {
        Object.assign(this, data);
    }

}
