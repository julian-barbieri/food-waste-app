import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import {
  FreisEntity,
  PaginationQuery,
  TestEntity,
} from './paginationQueryTest.query';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('paginationQueryTest')
  @ApiOkResponse({ type: PaginationQuery })
  findAll(@Query() paginationQuery: PaginationQuery) {
    return new PaginationQuery(paginationQuery);
  }

  @Get('test')
  test(@Query() test: TestEntity) {
    return test;
  }

  @Get('freis/:id/:name')
  @ApiOkResponse({ type: FreisEntity })
  freis(
    @Param('id') id: string,
    @Param('name') name: string,
    @Query('zeta') zeta: string,
  ) {
    return {
      value: 'hola soy freis',
      id,
      name,
      zeta,
    };
  }
}
