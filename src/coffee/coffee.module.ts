import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller.js';
import { CoffeeService } from './coffee.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
