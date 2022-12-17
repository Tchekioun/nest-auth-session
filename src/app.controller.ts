import { Controller, Get, Request } from '@nestjs/common';
import { Roles } from '@prisma/client';
import { HasRoles } from './auth/decorators/permissions.decorator';

@Controller()
@HasRoles(Roles.ADMIN)
export class AppController {
  @Get('protected')
  @HasRoles(Roles.USER)
  hello(@Request() req): string {
    // console.log(req);
    return req.user;
  }
  @HasRoles(Roles.ADMIN)
  @Get('protected2')
  hello2(@Request() req): string {
    // console.log(req);
    return req.user;
  }
}
