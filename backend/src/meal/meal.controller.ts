import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMealDTO } from './dtos/create.meal.dto'; 
import { MealService } from './meal.service'; 
import { IMeal } from './interfaces/meal.interface';
import { UpdateMealDto } from './dtos/update.meal.dto'; 

@Controller('meal')
export class MealController {

    constructor(private mealService: MealService ) {}

    @Post()
    async create(@Body() meal: CreateMealDTO): Promise<IMeal> {
        return this.mealService.create(meal);
    }

    @Get()
    async findAll(): Promise<IMeal[]> {
        return this.mealService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<IMeal> {
        return this.mealService.findByID(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() users: UpdateMealDto): Promise<IMeal> {
        return this.mealService.update(id, users);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<IMeal> {
        return this.mealService.delete(id);
    }
}
