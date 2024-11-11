import { Module } from '@nestjs/common';
import { DietPlanService } from './diet-plan.service';
import { DietPlanController } from './diet-plan.controller';
import { PrismaService } from '../database/prisma.service'; 

@Module({
  controllers: [DietPlanController],
  providers: [DietPlanService, PrismaService],
  exports: [DietPlanService], 
})
export class DietPlanModule {}