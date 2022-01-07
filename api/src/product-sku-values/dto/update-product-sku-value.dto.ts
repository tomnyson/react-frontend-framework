import { PartialType } from '@nestjs/mapped-types';
import { CreateProductSkuValueDto } from './create-product-sku-value.dto';

export class UpdateProductSkuValueDto extends PartialType(CreateProductSkuValueDto) {}
