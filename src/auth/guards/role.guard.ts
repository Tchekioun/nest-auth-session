import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isAllowed = this.reflector.getAllAndOverride<Roles[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!isAllowed) return true;
    console.log('the roles are : ', isAllowed);
    const userRoles: Roles[] = await context.switchToHttp().getRequest().user
      .roles;
    console.log(userRoles);
    return await isAllowed.some((role) => userRoles.includes(role));
  }
}
