import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWorkoutDTO } from './dtos/create.workout.dto';
import { WorkoutService } from './workout.service';
import { IWorkout } from './interfaces/workout.interface';
import { UpdateWorkoutDto } from './dtos/update.workout.dto';

@Controller('workout')
export class WorkoutController {

    constructor(private workoutService: WorkoutService ) {}

    @Post()
    async create(@Body() meal: CreateWorkoutDTO): Promise<IWorkout> {
        return this.workoutService.create(meal);
    }

    @Get()
    async findAll(): Promise<IWorkout[]> {
        return this.workoutService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<IWorkout> {
        return this.workoutService.findByID(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() users: UpdateWorkoutDto): Promise<IWorkout> {
        return this.workoutService.update(id, users);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<IWorkout> {
        return this.workoutService.delete(id);
    }
}
