import { ApiProperty } from '@nestjs/swagger';

import { Brand } from '@prisma/client';
import { UserEntity } from 'src/user/entities/user.entity';

export class BrandEntity implements Brand {
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

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;

  constructor({ user, ...data }: Partial<BrandEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }
}
