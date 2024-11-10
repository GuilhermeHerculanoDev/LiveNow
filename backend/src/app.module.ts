import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MealController } from './meal/meal.controller';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    MealModule,
  ],
  controllers: [AppController, MealController],
  providers: [AppService],
})
export class AppModule {}
