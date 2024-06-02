import { ApiProperty } from "@nestjs/swagger";
import { Transaction } from "@prisma/client";
import { ProductEntity } from "src/product/entities/product.entity";
import { UserEntity } from "src/user/entities/user.entity";

export class TransactionEntity implements Transaction {
    
    /*
    user            User        @relation(fields: [userId], references: [id])
    product         Product     @relation(fields: [productId], references: [id])
    review          Review?*/
    
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    productId: string;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    totalAmount: number;

    @ApiProperty()
    transactionDate: Date;

    @ApiProperty()
    delivered: boolean;

    @ApiProperty()
    user: UserEntity;

    @ApiProperty()
    product: ProductEntity;

    //Agregar reviews mas adelante
    /*@ApiProperty()
    review: any;*/
    
    constructor(partial: Partial<TransactionEntity>) {
        Object.assign(this, partial);
        
        /*if (partial.user) {
          this.user = new UserEntity(partial.user);
        }*/
        if (partial.product) {
          this.product = new ProductEntity(partial.product);
        }
    }
}
