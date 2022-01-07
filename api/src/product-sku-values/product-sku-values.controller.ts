import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductSkuValuesService } from './product-sku-values.service';
import { CreateProductSkuValueDto } from './dto/create-product-sku-value.dto';
import { UpdateProductSkuValueDto } from './dto/update-product-sku-value.dto';

@Controller('product-sku-values')
export class ProductSkuValuesController {
  constructor(private readonly productSkuValuesService: ProductSkuValuesService) {}

  @Post()
  create(@Body() createProductSkuValueDto: CreateProductSkuValueDto) {
    return this.productSkuValuesService.create(createProductSkuValueDto);
  }

  @Get()
  findAll() {
    return this.productSkuValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSkuValuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductSkuValueDto: UpdateProductSkuValueDto) {
    return this.productSkuValuesService.update(+id, updateProductSkuValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSkuValuesService.remove(+id);
  }
}
