import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './services/auth.service';
import { PasswordService } from './services/password.service';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule, PassportModule.register({ session: true })],
  providers: [PasswordService, AuthService, LocalStrategy, SessionSerializer],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}
