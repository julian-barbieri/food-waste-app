import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { User } from '@prisma/client';

export const UserReq = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as User | undefined;
  },
);
