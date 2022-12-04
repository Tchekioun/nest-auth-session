import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { Roles } from '@prisma/client';
import { HasRoles } from './decorators/permissions.decorator';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login() {
    console.log('somebody logged in Bro');
    return { message: 'Welcome' };
  }
  @HasRoles(Roles.ADMIN, Roles.USER)
  @Get('protected')
  hello(@Request() req): string {
    // console.log(req);
    return req.user;
  }
  @Get('logout')
  logout(@Request() req): string {
    // console.log(req);
    return req.session.destroy();
  }
}
