import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTrainingPlanDTO } from './dtos/create.training-plan.dto';
import { TrainingPlanService } from './training-plan.service';
import { ITrainigPlan } from './interfaces/training-plan.interface';
import { UpdateTrainigPlanDto } from './dtos/update.training-plan.dto';

@Controller('trainingPlan')
export class TrainingPlanController {

    constructor(private trainingPlanService: TrainingPlanService ) {}

    @Post()
    async create(@Body() dietPlan: CreateTrainingPlanDTO): Promise<ITrainigPlan> {
        return this.trainingPlanService.create(dietPlan);
    }

    @Get()
    async findAll(): Promise<ITrainigPlan[]> {
        return this.trainingPlanService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<ITrainigPlan> {
        return this.trainingPlanService.findByID(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() users: UpdateTrainigPlanDto): Promise<ITrainigPlan> {
        return this.trainingPlanService.update(id, users);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<ITrainigPlan> {
        return this.trainingPlanService.delete(id);
    }
}
