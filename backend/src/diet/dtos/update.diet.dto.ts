import { PartialType } from '@nestjs/mapped-types';
import { CreateDietDTO } from './create.diet.dto';

export class UpdateDietDto extends PartialType(CreateDietDTO) {}