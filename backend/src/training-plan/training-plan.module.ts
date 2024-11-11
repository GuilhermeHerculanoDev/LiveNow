import { Module } from '@nestjs/common';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';
import { PrismaService } from '../database/prisma.service'; 

@Module({
  controllers: [TrainingPlanController],
  providers: [TrainingPlanService, PrismaService],
  exports: [TrainingPlanService], 
})
export class TrainingPlanModule {}