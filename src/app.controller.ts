import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from './auth/decorators/public.decorator';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login() {
    return { message: 'Welcome' };
  }
  @Get('protected')
  hello(@Request() req): string {
    // console.log(req);
    return req.user;
  }
}
