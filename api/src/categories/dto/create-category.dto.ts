import { IsString, IsInt } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  description?: string;
  icon?: string;
  banner?: string;
  @IsInt()
  parent: number;

}
