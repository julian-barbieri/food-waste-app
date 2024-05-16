import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //CREATE USER
  @Post('signUp')
  async signupUser(
    @Body()
    userData: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ): Promise<User> {
    const user = await this.userService.findUnique({
      email: userData.email,
    });

    if (user) {
      throw new Error('User already exists');
    }

    const userToCreate = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      hashedPassword: await this.userService.hashPassword(userData.password),
    };

    return this.userService.create(userToCreate);
  }

  //GET All USERS
  @Get('all')
  async getUsers() {
    return this.userService.findMany({});
  }

  //GET USER by id
  
}
