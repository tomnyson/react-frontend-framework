import { Injectable } from '@nestjs/common';
import { CreateProductSkuValueDto } from './dto/create-product-sku-value.dto';
import { UpdateProductSkuValueDto } from './dto/update-product-sku-value.dto';

@Injectable()
export class ProductSkuValuesService {
  create(createProductSkuValueDto: CreateProductSkuValueDto) {
    return 'This action adds a new productSkuValue';
  }

  findAll() {
    return `This action returns all productSkuValues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSkuValue`;
  }

  update(id: number, updateProductSkuValueDto: UpdateProductSkuValueDto) {
    return `This action updates a #${id} productSkuValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSkuValue`;
  }
}
