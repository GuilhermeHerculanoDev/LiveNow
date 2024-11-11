import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MealController } from './meal/meal.controller';
import { MealModule } from './meal/meal.module';
import { DietController } from './diet/diet.controller';
import { DietService } from './diet/diet.service';
import { DietModule } from './diet/diet.module';
import { DietPlanService } from './diet-plan/diet-plan.service';
import { DietPlanModule } from './diet-plan/diet-plan.module';
import { MealService } from './meal/meal.service';
import { PrismaModule } from './database/prisma.module';
import { ExerciseController } from './exercise/exercise.controller';
import { ExerciseService } from './exercise/exercise.service';
import { ExerciseModule } from './exercise/exercise.module';
import { WorkoutController } from './workout/workout.controller';
import { WorkoutService } from './workout/workout.service';
import { WorkoutModule } from './workout/workout.module';
import { TrainingPlanModule } from './training-plan/training-plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    MealModule,
    DietModule,
    DietPlanModule,
    PrismaModule,
    ExerciseModule,
    WorkoutModule,
    TrainingPlanModule,
  ],
  controllers: [AppController, MealController, DietController ,DietController, ExerciseController, WorkoutController],
  providers: [AppService, MealService ,DietService, DietPlanService, ExerciseService, WorkoutService],
})
export class AppModule {}
