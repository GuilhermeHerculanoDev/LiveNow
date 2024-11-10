import { Module } from '@nestjs/common';
import { DietService } from './diet.service';
import { DietController } from './diet.controller';
import { PrismaService } from '../database/prisma.service'; 

@Module({
  controllers: [DietController],
  providers: [DietService, PrismaService],
  exports: [DietService], 
})
export class DietModule {}