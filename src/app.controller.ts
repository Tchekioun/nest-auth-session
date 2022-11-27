import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login() {
    return { message: 'Welcome' };
  }
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  hello(@Request() req): string {
    // console.log(req);
    return req.user;
  }
}
