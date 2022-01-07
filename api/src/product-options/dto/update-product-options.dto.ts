import { PartialType } from '@nestjs/mapped-types';
import { CreateProductOptionDto } from './create-product-options.dto';

export class UpdateProductOptionDto extends PartialType(CreateProductOptionDto) { }
