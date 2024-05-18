import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Environment, EnvironmentVariables } from './env.validation';

@Injectable()
export class EnvConfigService extends EnvironmentVariables {
  constructor(private configService: ConfigService<EnvironmentVariables>) {
    super();
  }

  NODE_ENV = this.configService.get('NODE_ENV', Environment.Development, {
    infer: true,
  });

  JWT_SECRET: string = this.configService.get<string>('JWT_SECRET');

  POSTGRES_DB: string = this.configService.get<string>('POSTGRES_DB');

  POSTGRES_USER: string = this.configService.get<string>('POSTGRES_USER');

  POSTGRES_PASSWORD: string =
    this.configService.get<string>('POSTGRES_PASSWORD');

  DATABASE_URL: string = this.configService.get<string>('DATABASE_URL');
}
