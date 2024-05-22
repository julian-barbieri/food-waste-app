import { Module } from '@nestjs/common';

import { HashModule } from 'src/hash/hash.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [HashModule],
})
export class UserModule {}
