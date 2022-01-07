import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Controller('Options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) { }

  @Post()
  create(@Body() CreateOptionDto: CreateOptionDto) {
    return this.optionsService.create(CreateOptionDto);
  }

  @Get()
  findAll() {
    return this.optionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateOptionDto: UpdateOptionDto) {
    return this.optionsService.update(+id, UpdateOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionsService.remove(+id);
  }
}
