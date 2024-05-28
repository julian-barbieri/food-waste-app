import { Logger, Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';

import { PrismaModule, QueryInfo, loggingMiddleware } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BrandModule } from './brand/brand.module';
import { EnvConfigModule } from './envConfig/envConfig.module';
import { UserModule } from './user/user.module';
import { StoresModule } from './stores/stores.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    EnvConfigModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log', // default is `debug`
            logMessage: (query: QueryInfo) =>
              `[Prisma Query] ${query.model}.${query.action} - ${query.executionTime}ms`,
          }),
        ],
      },
    }),
    UserModule,
    BrandModule,
    AuthModule,
    StoresModule,
    ProductModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
