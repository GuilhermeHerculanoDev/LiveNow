import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingPlanDTO } from './create.training-plan.dto';

export class UpdateTrainigPlanDto extends PartialType(CreateTrainingPlanDTO) {}