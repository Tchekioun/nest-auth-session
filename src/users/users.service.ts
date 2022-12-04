import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PasswordService } from 'src/auth/services/password.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private passwordService: PasswordService,
  ) {}
  async create(data: Prisma.UserCreateInput): Promise<Omit<User, 'password'>> {
    const hashedPassword = await this.passwordService.hashPassword(
      data.password,
    );
    const { password, ...user } = await this.prismaService.user.create({
      data: { ...data, password: hashedPassword },
    });
    return user;
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new NotFoundException('username does not exist');
    }
    return user;
  }
  async findOne(id: number) {
    const { password, ...user } = await this.prismaService.user.findFirst({
      where: { id: id },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashedPassword = await this.passwordService.hashPassword(
      updateUserDto.password,
    );
    const { password, ...user } = await this.prismaService.user.update({
      where: { id: id },
      data: { ...updateUserDto, password: hashedPassword },
    });
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user but you are not allowed to delete any, Sorry`;
  }
}
