import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import { PaginationQuery } from './paginationQueryTest.query';

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
    console.log({ paginationQuery });
    return new PaginationQuery(paginationQuery);
  }
}
