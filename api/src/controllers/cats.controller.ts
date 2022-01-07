import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log('id: string', id);
    return `This action returns all cats ${id}`;
  }
}