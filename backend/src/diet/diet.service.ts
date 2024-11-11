import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateDietDTO } from './dtos/create.diet.dto'; 
import { IDiet } from './interfaces/diet.interface';
import { UpdateDietDto } from './dtos/update.diet.dto';

@Injectable()
export class DietService {

    constructor(private prisma: PrismaService) {}

    async create(diet: CreateDietDTO): Promise<IDiet> {

        return await this.prisma.diet.create({data: diet});
    }

    async findAll(): Promise<IDiet[]> {
        return await this.prisma.diet.findMany();  
    }

    async findByID(ids: number): Promise<IDiet> {
        const id = parseInt(ids.toString());
        const diet = await this.prisma.diet.findUnique({
            where: { id },
        });

        if (diet) {
            return diet;
        }
        
        throw new NotFoundException("Refeição não encontrada");
    }

    async update(id: number, diets: UpdateDietDto): Promise<IDiet> {
        const number = parseInt(id.toString());

        if (id === number) {
            try {
                const updatedDiet = await this.prisma.diet.update({
                    where: { id: number },
                    data: diets,
                });
                return updatedDiet;
            } catch (error) {
                throw new NotFoundException('Exercicio não encontrado');
            }
        }
        
        throw new UnauthorizedException("Seu exercicio não pode ser editado");
    }

    async delete(id: number): Promise<IDiet> {
        const number = parseInt(id.toString());

        if (id === number) {
            return await this.prisma.diet.delete({
                where: { id: number },
            });
        }

        throw new UnauthorizedException("Seu usuário não pode excluir este exercicio");
    }
}
