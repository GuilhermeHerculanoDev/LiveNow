import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateDietPlanDTO } from './dtos/create.diet-plan.dto';
import { IDietPlan } from './interfaces/diet-plan.interface'; 
import { UpdateDietPlanDto } from './dtos/update.diet-plan.dto';

@Injectable()
export class DietPlanService {

    constructor(private prisma: PrismaService) {}

    async create(diet: CreateDietPlanDTO): Promise<IDietPlan> {

        return await this.prisma.dietPlan.create({data: diet});
    }

    async findAll(): Promise<IDietPlan[]> {
        return await this.prisma.dietPlan.findMany();  
    }

    async findByID(ids: number): Promise<IDietPlan> {
        const id = parseInt(ids.toString());
        const planDiets = await this.prisma.dietPlan.findUnique({
            where: { id },
        });

        if (planDiets) {
            return planDiets;
        }
        
        throw new NotFoundException("Refeição não encontrada");
    }

    async update(id: number, planDiets: UpdateDietPlanDto): Promise<IDietPlan> {
        const number = parseInt(id.toString());

        if (id === number) {
            try {
                const updatedDietPlan = await this.prisma.dietPlan.update({
                    where: { id: number },
                    data: planDiets,
                });
                return updatedDietPlan;
            } catch (error) {
                throw new NotFoundException('Plano de Dieta não encontrado');
            }
        }
        
        throw new UnauthorizedException("Seu Plano de Dieta não pode ser editado");
    }

    async delete(id: number): Promise<IDietPlan> {
        const number = parseInt(id.toString());

        if (id === number) {
            return await this.prisma.dietPlan.delete({
                where: { id: number },
            });
        }

        throw new UnauthorizedException("Seu usuário não pode excluir este Plano de Dieta ");
    }
}
