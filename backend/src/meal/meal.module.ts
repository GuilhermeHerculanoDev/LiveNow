import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { PrismaService } from '../database/prisma.service'; 

@Module({
  controllers: [MealController],
  providers: [MealService, PrismaService],
  exports: [MealService], 
})
export class MealModule {}