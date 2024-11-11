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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    MealModule,
    DietModule,
    DietPlanModule,
    PrismaModule,
  ],
  controllers: [AppController, MealController, DietController ,DietController],
  providers: [AppService, MealService ,DietService, DietPlanService],
})
export class AppModule {}
