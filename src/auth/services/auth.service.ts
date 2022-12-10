import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    const isMatched = await this.passwordService.compare(
      password,
      user.password,
    );
    if (isMatched) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async logout(req, res) {
    await req.session.destroy();
    await res.clearCookie('connect.sid');
    return { message: 'you have been logged out successfully' };
  }
}
