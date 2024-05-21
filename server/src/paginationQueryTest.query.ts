import { ApiProperty } from '@nestjs/swagger';

import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export enum LettersEnum {
  A = 'A',
  B = 'B',
  C = 'C',
}

export class PaginationQuery {
  @ApiProperty({
    default: 10,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  n: number = 10;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  // @Type(() => String)
  @Transform((params) => {
    if (typeof params.value === 'string') return params.value.split(',');
  })
  sortBy: string[];

  @ApiProperty()
  @IsString()
  s: string;

  @ApiProperty({
    enum: LettersEnum,
    enumName: 'LettersEnum',
  })
  @IsEnum(LettersEnum)
  enum: LettersEnum;

  @ApiProperty({
    type: String,
    description: 'ISO 8601 date string or Unix timestamp',
  })
  @IsDate()
  @Type(() => Date)
  beforeDate: Date;

  constructor(partial: Partial<PaginationQuery>) {
    Object.assign(this, partial);
  }
}
