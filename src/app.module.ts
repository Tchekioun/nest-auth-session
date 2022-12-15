import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { APP_FILTER } from '@nestjs/core';
import { MyExceptionFilter } from './exceptionFilters/exception.filter';
@Module({
  imports: [UsersModule, AuthModule, PrismaModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: MyExceptionFilter }],
})
export class AppModule {}
