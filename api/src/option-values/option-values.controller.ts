import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionsValueService } from './option-values.service';
import { CreateOptionsValueDto } from './dto/create-option-values.dto';
import { UpdateOptionsValueDto } from './dto/update-option-values.dto';

@Controller('option-values')
export class OptionsValueController {
  constructor(private readonly OptionsValueService: OptionsValueService) { }

  @Post()
  create(@Body() createOptionsValueDto: CreateOptionsValueDto) {
    return this.OptionsValueService.create(createOptionsValueDto);
  }

  @Get()
  findAll() {
    return this.OptionsValueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.OptionsValueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptionsValueDto: UpdateOptionsValueDto) {
    return this.OptionsValueService.update(+id, updateOptionsValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.OptionsValueService.remove(+id);
  }
}
