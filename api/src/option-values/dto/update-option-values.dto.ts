import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionsValueDto } from './create-option-values.dto';

export class UpdateOptionsValueDto extends PartialType(CreateOptionsValueDto) { }
