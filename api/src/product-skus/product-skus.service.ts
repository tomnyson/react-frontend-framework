import { Injectable } from '@nestjs/common';
import { CreateProductSkusDto } from './dto/create-product-skus.dto';
import { UpdateProductSkusDto } from './dto/update-product-skus.dto';

@Injectable()
export class ProductSkusService {
  create(createProductSkusDto: CreateProductSkusDto) {
    return 'This action adds a new productSkus';
  }

  findAll() {
    return `This action returns all productSkus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSkus`;
  }

  update(id: number, updateProductSkusDto: UpdateProductSkusDto) {
    return `This action updates a #${id} productSkus`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSkus`;
  }
}
