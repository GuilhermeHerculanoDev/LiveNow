import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { PrismaService } from '../database/prisma.service'; 

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService, PrismaService],
  exports: [WorkoutService], 
})
export class WorkoutModule {}