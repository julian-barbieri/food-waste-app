import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Injectable()
export class HashService {
  async hashPassword(password: string) {
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePasswords(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
