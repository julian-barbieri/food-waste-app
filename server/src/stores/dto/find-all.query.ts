import { ApiProperty } from "@nestjs/swagger";
import { Type, Transform } from "class-transformer";
import { IsOptional, IsNumber, IsArray, IsString, IsEnum, IsDate, IsBoolean } from "class-validator";
import { LettersEnum, PaginationQuery } from "src/paginationQueryTest.query";

//ESTA EN DESUSO ESTE ARCHIVO
//Juli no pudo hacer una query con un mismo endpoint, SE DEJA PARA MAS ADELANTE

export class FindAllStoresQuery {
    @ApiProperty({
      default: undefined,
      required: false,
    })
    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    isActive?: boolean;
  
    constructor(partial: Partial<FindAllStoresQuery>) {
      Object.assign(this, partial);
    }
  }