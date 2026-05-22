import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CoffeeModule } from './coffee/coffee.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [CoffeeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
