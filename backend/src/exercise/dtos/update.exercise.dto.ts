import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseDTO } from './create.exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDTO) {}