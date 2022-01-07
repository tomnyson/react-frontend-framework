import { Injectable, Inject } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { Repository } from 'typeorm';
import { OptionEntity } from './entities/options.entity';

@Injectable()
export class OptionsService {
  constructor(
    @Inject('OPTION_REPOSITORY')
    private OptionsRepository: Repository<OptionEntity>,
  ) { }
  create(createOptionDto: CreateOptionDto) {
    return this.OptionsRepository.save(createOptionDto)
  }

  findAll() {
    return this.OptionsRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} Option`;
  }

  update(id: number, updateOptionDto: UpdateOptionDto) {
    return `This action updates a #${id} Option`;
  }

  remove(id: number) {
    return `This action removes a #${id} Option`;
  }
}
