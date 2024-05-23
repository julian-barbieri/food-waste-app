import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { PrismaModule } from 'nestjs-prisma';
import { EnvConfigModule } from 'src/envConfig/envConfig.module';
import { EnvConfigService } from 'src/envConfig/envConfig.service';
import { HashModule } from 'src/hash/hash.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    EnvConfigModule,
    JwtModule.registerAsync({
      imports: [EnvConfigModule],
      inject: [EnvConfigService],
      useFactory: (env: EnvConfigService) => ({
        secret: env.JWT_SECRET,
        signOptions: { expiresIn: '30d' }, // e.g. 30s, 7d, 24h
      }),
    }),
    HashModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
