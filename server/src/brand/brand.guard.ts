import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BrandGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { user, params } = request;

    if (params?.id == null || typeof params.id !== 'string') {
      return false;
    }

    const brand = await this.prisma.brand.findUnique({
      where: { id: params.id },
    });

    if (brand?.userId !== user.id) {
      return false;
    }

    return true;
  }
}
