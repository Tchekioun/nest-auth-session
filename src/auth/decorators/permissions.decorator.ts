import { SetMetadata } from '@nestjs/common';
import { Roles } from '@prisma/client';

export const HasRoles = (...roles: Roles[]) => SetMetadata('roles', roles);
