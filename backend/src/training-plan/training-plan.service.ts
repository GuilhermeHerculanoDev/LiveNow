import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateTrainingPlanDTO } from './dtos/create.training-plan.dto';
import { ITrainigPlan } from './interfaces/training-plan.interface';
import { UpdateTrainigPlanDto } from './dtos/update.training-plan.dto';

@Injectable()
export class TrainingPlanService {

    constructor(private prisma: PrismaService) {}

    async create(meal: CreateTrainingPlanDTO): Promise<ITrainigPlan> {

        return await this.prisma.trainingPlan.create({data: meal});
    }

    async findAll(): Promise<ITrainigPlan[]> {
        return await this.prisma.trainingPlan.findMany();  
    }

    async findByID(ids: number): Promise<ITrainigPlan> {
        const id = parseInt(ids.toString());
        const meal = await this.prisma.trainingPlan.findUnique({
            where: { id },
        });

        if (meal) {
            return meal;
        }
        
        throw new NotFoundException("Refeição não encontrada");
    }

    async update(id: number, meals: UpdateTrainigPlanDto): Promise<ITrainigPlan> {
        const number = parseInt(id.toString());

        if (id === number) {
            try {
                const updatedMeal = await this.prisma.trainingPlan.update({
                    where: { id: number },
                    data: meals,
                });
                return updatedMeal;
            } catch (error) {
                throw new NotFoundException('refeição não encontrada');
            }
        }
        
        throw new UnauthorizedException("Sua refeição não pode ser editada");
    }

    async delete(id: number): Promise<ITrainigPlan> {
        const number = parseInt(id.toString());

        if (id === number) {
            return await this.prisma.trainingPlan.delete({
                where: { id: number },
            });
        }

        throw new UnauthorizedException("Seu usuário não pode excluir está refeição");
    }
}
