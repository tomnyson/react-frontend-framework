import { PartialType } from '@nestjs/mapped-types';
import { CreateProductSkusDto } from './create-product-skus.dto';

export class UpdateProductSkusDto extends PartialType(CreateProductSkusDto) {}
