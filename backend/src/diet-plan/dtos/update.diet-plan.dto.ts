import { PartialType } from '@nestjs/mapped-types';
import { CreateDietPlanDTO } from './create.diet-plan.dto';

export class UpdateDietPlanDto extends PartialType(CreateDietPlanDTO) {}