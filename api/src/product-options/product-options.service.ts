import { Injectable, Inject } from '@nestjs/common';
import { CreateProductOptionDto } from './dto/create-product-options.dto';
import { UpdateProductOptionDto } from './dto/update-product-options.dto';
import { Repository, getManager } from 'typeorm';
import { ProductOptionEntity } from './entities/product-options.entity';
import { OptionEntity } from '../options/entities/options.entity';
import { ProductsEntity } from '../products/entities/product.entity';

@Injectable()
export class ProductOptionsService {

  constructor(
    @Inject('PRODUCT_OPTION_REPOSITORY')
    private productOptionRepository: Repository<ProductOptionEntity>,
  ) { }

  async create(createProductOptionDto: CreateProductOptionDto) {
    const optionRepository = getManager().getRepository(OptionEntity);
    const productRepository = getManager().getRepository(ProductsEntity);
    const newProductOption = new ProductOptionEntity();
    const option = await optionRepository.findOne({ where: { id: createProductOptionDto.productId } })
    const product = await productRepository.findOne({ where: { id: createProductOptionDto.productId } })
    newProductOption.option = option
    newProductOption.product = product

    return await this.productOptionRepository.save(newProductOption)
  }

  findAll() {
    return `This action returns all productOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productOption`;
  }

  update(id: number, updateProductOptionDto: UpdateProductOptionDto) {
    return `This action updates a #${id} productOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} productOption`;
  }
}
