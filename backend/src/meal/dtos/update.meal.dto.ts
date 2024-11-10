import { PartialType } from '@nestjs/mapped-types';
import { CreateMealDTO } from './create.meal.dto';

export class UpdateMealDto extends PartialType(CreateMealDTO) {}