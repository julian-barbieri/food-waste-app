import { PartialType } from '@nestjs/swagger';
import { CreateUserFavoriteStoreDto } from './create-user-favorite-store.dto';

export class UpdateUserFavoriteStoreDto extends PartialType(CreateUserFavoriteStoreDto) {}
