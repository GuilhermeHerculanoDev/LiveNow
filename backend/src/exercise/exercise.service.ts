import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateExerciseDTO } from './dtos/create.exercise.dto';
import { IExercise } from './interfaces/exercise.interface';
import { UpdateExerciseDto } from './dtos/update.exercise.dto';

@Injectable()
export class ExerciseService {

    constructor(private prisma: PrismaService) {}

    async create(diet: CreateExerciseDTO): Promise<IExercise> {

        return await this.prisma.exercise.create({data: diet});
    }

    async findAll(): Promise<IExercise[]> {
        return await this.prisma.exercise.findMany();  
    }

    async findByID(ids: number): Promise<IExercise> {
        const id = parseInt(ids.toString());
        const exercise = await this.prisma.exercise.findUnique({
            where: { id },
        });

        if (exercise) {
            return exercise;
        }
        
        throw new NotFoundException("Exercicio não encontrado");
    }

    async update(id: number, diets: UpdateExerciseDto): Promise<IExercise> {
        const number = parseInt(id.toString());

        if (id === number) {
            try {
                const updatedUser = await this.prisma.exercise.update({
                    where: { id: number },
                    data: diets,
                });
                return updatedUser;
            } catch (error) {
                throw new NotFoundException('refeição não encontrada');
            }
        }
        
        throw new UnauthorizedException("Sua refeição não pode ser editada");
    }

    async delete(id: number): Promise<IExercise> {
        const number = parseInt(id.toString());

        if (id === number) {
            return await this.prisma.exercise.delete({
                where: { id: number },
            });
        }

        throw new UnauthorizedException("Seu usuário não pode excluir está refeição");
    }
}
