import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUsersDTO } from './dtos/create.users.dto';
import { UsersService } from './users.service';
import { IUsers } from './interfaces/users.interface';
import { UpdateUserDto } from './dtos/update.users.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() users: CreateUsersDTO): Promise<IUsers> {
        return this.usersService.create(users);
    }

    @Get()
    async findAll(): Promise<IUsers[]> {
        return this.usersService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<IUsers> {
        return this.usersService.findByID(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() users: UpdateUserDto): Promise<IUsers> {
        return this.usersService.update(id, users);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<IUsers> {
        return this.usersService.delete(id);
    }
}
