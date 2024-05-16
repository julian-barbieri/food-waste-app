import { Module } from '@nestjs/common';
import { StoreTagService } from './store-tag.service';
import { StoreTagController } from './store-tag.controller';

@Module({
  controllers: [StoreTagController],
  providers: [StoreTagService],
})
export class StoreTagModule {}
