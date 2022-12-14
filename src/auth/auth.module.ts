import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { RoleGuard } from './guards/role.guard';
import { AuthService } from './services/auth.service';
import { PasswordService } from './services/password.service';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [
    PasswordService,
    AuthService,
    LocalStrategy,
    SessionSerializer,
    { provide: APP_GUARD, useClass: AuthenticatedGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}
