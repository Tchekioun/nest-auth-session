import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: Prisma.ClientCreateInput) {
    return await this.prismaService.client.create({ data });
  }

  async findAll() {
    return await this.prismaService.client.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }
  findByPhoneNumber(phoneNumber: string) {
    const client = this.prismaService.client.findUnique({
      where: { phoneNumber },
    });
    return client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
