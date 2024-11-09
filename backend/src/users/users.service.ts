import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsersDTO } from './dtos/create.users.dto';
import { PrismaService } from '../database/prisma.service';
import { IUsers } from './interfaces/users.interface';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dtos/update.users.dto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    async create(users: CreateUsersDTO): Promise<IUsers> {
        const { name, email, password } = users;

        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [{ email }, { name }],
            },
        });

        if (existingUser) {
            throw new HttpException(
                `O ${existingUser.name === name ? 'nome' : 'email'} já está registrado`,
                HttpStatus.BAD_REQUEST,
            );
        }

        const hashPassword = await bcrypt.hash(password, 10);
        return await this.prisma.user.create({
            data: { ...users, password: hashPassword },
        });
    }

    async findAll(): Promise<IUsers[]> {
        return await this.prisma.user.findMany();  
    }

    async findByID(ids: number): Promise<IUsers> {
        const id = parseInt(ids.toString());
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        if (user) {
            return user;
        }
        
        throw new NotFoundException("Usuário não encontrado");
    }

    async update(id: number, users: UpdateUserDto): Promise<IUsers> {
        const number = parseInt(id.toString());

        if (id === number) {
            try {
                const updatedUser = await this.prisma.user.update({
                    where: { id: number },
                    data: users,
                });
                return updatedUser;
            } catch (error) {
                throw new NotFoundException('Usuário não encontrado');
            }
        }
        
        throw new UnauthorizedException("Seu usuário não pode editar");
    }

    async delete(id: number): Promise<IUsers> {
        const number = parseInt(id.toString());

        if (id === number) {
            return await this.prisma.user.delete({
                where: { id: number },
            });
        }

        throw new UnauthorizedException("Seu usuário não pode excluir este perfil");
    }
}
