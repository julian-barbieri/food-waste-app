import { ApiProperty } from "@nestjs/swagger";
import { Transaction } from "@prisma/client";
import { ProductEntity } from "src/product/entities/product.entity";
import { StoreEntity } from "src/stores/entities/store.entity";
import { UserEntity } from "src/user/entities/user.entity";

export class TransactionEntity implements Transaction {
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    storeId: string;

    @ApiProperty()
    productId: string;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    totalAmount: number;

    @ApiProperty()
    transactionDate: Date;

    @ApiProperty()
    user: UserEntity;

    @ApiProperty()
    product: ProductEntity;

    @ApiProperty()
    store: StoreEntity;
    
    constructor({product, user, store, ...data }: Partial<TransactionEntity>) {
        
        Object.assign(this, data);
        
        if (product) {
            this.product = new ProductEntity(product);
        }

        if (store) {
            this.store = new StoreEntity(store);
        }

        if (user) {
            this.user = new UserEntity(user);
        }

    }

    
}
