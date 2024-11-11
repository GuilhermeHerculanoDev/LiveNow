import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateDietPlanDTO } from './dtos/create.diet-plan.dto';
import { DietPlanService } from './diet-plan.service';
import { IDietPlan } from './interfaces/diet-plan.interface'; 
import { UpdateDietPlanDto } from './dtos/update.diet-plan.dto';

@Controller('dietPlan')
export class DietPlanController {

    constructor(private dietPlanService: DietPlanService ) {}

    @Post()
    async create(@Body() dietPlan: CreateDietPlanDTO): Promise<IDietPlan> {
        return this.dietPlanService.create(dietPlan);
    }

    @Get()
    async findAll(): Promise<IDietPlan[]> {
        return this.dietPlanService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<IDietPlan> {
        return this.dietPlanService.findByID(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() users: UpdateDietPlanDto): Promise<IDietPlan> {
        return this.dietPlanService.update(id, users);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<IDietPlan> {
        return this.dietPlanService.delete(id);
    }
}
