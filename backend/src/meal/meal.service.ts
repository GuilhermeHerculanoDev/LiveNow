import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateMealDTO } from './dtos/create.meal.dto';
import { PrismaService } from '../database/prisma.service';
import { IMeal } from './interfaces/meal.interface';
import { UpdateMealDto } from './dtos/update.meal.dto';

@Injectable()
export class MealService {

    constructor(private prisma: PrismaService) {}

    async create(meal: CreateMealDTO): Promise<IMeal> {

        return await this.prisma.meal.create({data: meal});
    }

    async findAll(): Promise<IMeal[]> {
        return await this.prisma.meal.findMany();  
    }

    async findByID(ids: number): Promise<IMeal> {
        const id = parseInt(ids.toString());
        const meal = await this.prisma.meal.findUnique({
            where: { id },
        });

        if (meal) {
            return meal;
        }
        
        throw new NotFoundException("Refeição não encontrada");
    }

    async update(id: number, meals: UpdateMealDto): Promise<IMeal> {
        const number = parseInt(id.toString());

        if (id === number) {
            try {
                const updatedMeal = await this.prisma.meal.update({
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

    async delete(id: number): Promise<IMeal> {
        const number = parseInt(id.toString());

        if (id === number) {
            return await this.prisma.meal.delete({
                where: { id: number },
            });
        }

        throw new UnauthorizedException("Seu usuário não pode excluir está refeição");
    }
}
