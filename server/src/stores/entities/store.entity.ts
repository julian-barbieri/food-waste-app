import { Product, Store } from "@prisma/client";
import { UserEntity } from 'src/user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from "src/product/entities/product.entity";

export class StoreEntity implements Store {   
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    logoUrl: string;

    @ApiProperty()
    backgroundPhotoUrl: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    longitude: number;

    @ApiProperty()
    isActive: boolean;

    //Agregar despues las stores favoritas del user
    /*@ApiProperty()
    favoritedBy: UserFavoriteStore[];*/

    /*@ApiProperty()
    user: UserEntity;*/

    /*@ApiProperty()
    products: ProductEntity[];*/

    constructor({...data }: Partial<StoreEntity>) {
        
      Object.assign(this, data);
        
      /*if (product) {
        this.product = new ProductEntity(product);
      }*/
    }

}
