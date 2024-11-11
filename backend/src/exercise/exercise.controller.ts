import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateExerciseDTO } from './dtos/create.exercise.dto';
import { ExerciseService } from './exercise.service';
import { IExercise } from './interfaces/exercise.interface';
import { UpdateExerciseDto } from './dtos/update.exercise.dto';

@Controller('exercise')
export class ExerciseController {

    constructor(private ExerciseService: ExerciseService ) {}

    @Post()
    async create(@Body() dietPlan: CreateExerciseDTO): Promise<IExercise> {
        return this.ExerciseService.create(dietPlan);
    }

    @Get()
    async findAll(): Promise<IExercise[]> {
        return this.ExerciseService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<IExercise> {
        return this.ExerciseService.findByID(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() users: UpdateExerciseDto): Promise<IExercise> {
        return this.ExerciseService.update(id, users);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<IExercise> {
        return this.ExerciseService.delete(id);
    }
}
