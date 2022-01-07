import { IsInt, IsString } from 'class-validator'
export class CreateOptionsValueDto {
  @IsInt()
  optionId: number;
  @IsString()
  value: any;
  option?: any;
}
