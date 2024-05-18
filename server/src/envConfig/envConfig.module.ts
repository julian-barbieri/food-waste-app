import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validateEnvConfig } from './env.validation';
import { EnvConfigService } from './envConfig.service';

@Module({
  providers: [EnvConfigService],
  exports: [EnvConfigService],
  imports: [
    ConfigModule.forRoot({
      validate: validateEnvConfig,
      expandVariables: true,
    }),
  ],
})
export class EnvConfigModule {}
