import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CoffeeService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.coffee.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const coffee = await this.prisma.coffee.findUnique({
      where: { id },
    });

    if (!coffee) {
      throw new NotFoundException('Coffee not found');
    }

    return coffee;
  }

  create(data: { name: string; price: number }) {
    return this.prisma.coffee.create({ data });
  }

  async update(id: number, data: { name?: string; price?: number }) {
    await this.findOne(id);

    return this.prisma.coffee.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.coffee.delete({
      where: { id },
    });
  }
}
