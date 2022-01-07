import { IsString } from 'class-validator';
export class CreateOptionDto {
  @IsString()
  name: string;
}
