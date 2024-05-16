import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { BrandModule } from './brand/brand.module';
import { StoreModule } from './store/store.module';
import { TagModule } from './tag/tag.module';
import { StoreTagModule } from './store-tag/store-tag.module';
import { UserFavoriteStoreModule } from './user-favorite-store/user-favorite-store.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    PrismaModule,
    UserModule,
    BrandModule,
    StoreModule,
    TagModule,
    StoreTagModule,
    UserFavoriteStoreModule,
    ProductModule,
    TransactionModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
