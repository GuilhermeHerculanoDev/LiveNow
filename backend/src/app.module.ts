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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    MealModule,
    DietModule,
  ],
  controllers: [AppController, MealController, DietController],
  providers: [AppService, DietService],
})
export class AppModule {}
