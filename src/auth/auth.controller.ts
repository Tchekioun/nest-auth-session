import {
  Controller,
  Request,
  Response,
  Get,
  Post,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Roles } from '@prisma/client';
import { HasRoles } from './decorators/permissions.decorator';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './services/auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    console.log('somebody logged in Bro');
    return { message: 'Welcome', roles: req.user.roles };
  }
  @HasRoles(Roles.ADMIN, Roles.USER)
  @Get('protected')
  hello(@Request() req): string {
    // console.log(req);
    return req.user;
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('logout')
  logout(@Request() req, @Response({ passthrough: true }) res): any {
    // console.log(req);
    return this.authService.logout(req, res);
  }
}
