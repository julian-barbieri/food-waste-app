import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  async signupUser(
    @Body() userData: { name: string; email: string },
  ): Promise<User> {
    return this.userService.create(userData);
  }

  @Get('all')
  async getUsers() {
    return this.userService.findMany({});
  }
}
