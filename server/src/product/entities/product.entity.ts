import { ApiProperty } from '@nestjs/swagger';

import { Product } from '@prisma/client';
import { StoreEntity } from 'src/stores/entities/store.entity';

export class ProductEntity implements Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  storeId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  oldPrice: number;

  @ApiProperty()
  actualPrice: number;

  @ApiProperty()
  availableQuantity: number;

  @ApiProperty()
  expiryDate: Date;

  @ApiProperty()
  pickupStartTime: Date;

  @ApiProperty()
  pickupEndTime: Date;

  @ApiProperty()
  store: StoreEntity;

  constructor({ store, ...data }: Partial<ProductEntity>) {
    Object.assign(this, data);

    if (store) {
      this.store = new StoreEntity(store);
    }
  }
}
