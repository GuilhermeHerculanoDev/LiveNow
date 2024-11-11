import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutDTO } from './create.workout.dto';

export class UpdateWorkoutDto extends PartialType(CreateWorkoutDTO) {}