import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateWorkoutDTO } from './dtos/create.workout.dto';
import { IWorkout } from './interfaces/workout.interface';
import { UpdateWorkoutDto } from './dtos/update.workout.dto';

@Injectable()
export class WorkoutService {

    constructor(private prisma: PrismaService) {}

    async create(diet: CreateWorkoutDTO): Promise<IWorkout> {

        return await this.prisma.workout.create({data: diet});
    }

    async findAll(): Promise<IWorkout[]> {
        return await this.prisma.workout.findMany();  
    }

    async findByID(ids: number): Promise<IWorkout> {
        const id = parseInt(ids.toString());
        const workout = await this.prisma.workout.findUnique({
            where: { id },
        });

        if (workout) {
            return workout;
        }
        
        throw new NotFoundException("Treino não encontrado");
    }

    async update(id: number, workout: UpdateWorkoutDto): Promise<IWorkout> {
        const number = parseInt(id.toString());

        if (id === number) {
            try {
                const updatedWorkout = await this.prisma.workout.update({
                    where: { id: number },
                    data: workout,
                });
                return updatedWorkout;
            } catch (error) {
                throw new NotFoundException('Treino não encontrada');
            }
        }
        
        throw new UnauthorizedException("Seu Treino não pode ser editado");
    }

    async delete(id: number): Promise<IWorkout> {
        const number = parseInt(id.toString());

        if (id === number) {
            return await this.prisma.workout.delete({
                where: { id: number },
            });
        }

        throw new UnauthorizedException("Seu usuário não pode excluir este treino");
    }
}
