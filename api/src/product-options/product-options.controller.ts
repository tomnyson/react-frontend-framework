import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductOptionsService } from './product-Options.service';
import { CreateProductOptionDto } from './dto/create-product-options.dto';
import { UpdateProductOptionDto } from './dto/update-product-options.dto';

@Controller('product-Options')
export class ProductOptionsController {
  constructor(private readonly productOptionsService: ProductOptionsService) { }

  @Post()
  create(@Body() createProductOptionDto: CreateProductOptionDto) {
    return this.productOptionsService.create(createProductOptionDto);
  }

  @Get()
  findAll() {
    return this.productOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductOptionDto: UpdateProductOptionDto) {
    return this.productOptionsService.update(+id, updateProductOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productOptionsService.remove(+id);
  }
}
