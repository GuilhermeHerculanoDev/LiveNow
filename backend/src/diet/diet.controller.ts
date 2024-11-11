import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateDietDTO } from './dtos/create.diet.dto'; 
import { DietService } from './diet.service';
import { IDiet } from './interfaces/diet.interface';
import { UpdateDietDto } from './dtos/update.diet.dto';

@Controller('diet')
export class DietController {

    constructor(private dietService: DietService ) {}

    @Post()
    async create(@Body() diet: CreateDietDTO): Promise<IDiet> {
        return this.dietService.create(diet);
    }

    @Get()
    async findAll(): Promise<IDiet[]> {
        return this.dietService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<IDiet> {
        return this.dietService.findByID(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() users: UpdateDietDto): Promise<IDiet> {
        return this.dietService.update(id, users);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<IDiet> {
        return this.dietService.delete(id);
    }
}
