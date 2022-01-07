import { IsInt } from 'class-validator';
export class CreateProductOptionDto {
  @IsInt()
  productId: number;
  @IsInt()
  optionId: number;
}
