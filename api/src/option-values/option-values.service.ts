import { Injectable, Inject } from '@nestjs/common';
import { CreateOptionsValueDto } from './dto/create-option-values.dto';
import { UpdateOptionsValueDto } from './dto/update-option-values.dto';
import { Repository, getManager } from 'typeorm';
import { OptionValuesEntity } from './entities/option-values.entity';
import { OptionEntity } from '../options/entities/options.entity';

@Injectable()
export class OptionsValueService {

  constructor(
    @Inject('OPTION_VALUES_REPOSITORY')
    private optionValuesEntity: Repository<OptionValuesEntity>,
  ) { }

  async create(createOptionsValueDto: CreateOptionsValueDto) {
    const manager = getManager();
    const OptionRepository = manager.getRepository(OptionEntity)
    const newOptionValue = new OptionValuesEntity();
    newOptionValue.value = createOptionsValueDto.value
    const Option = await OptionRepository.findOne({
      where: {
        id: createOptionsValueDto.optionId
      }
    })
    if (Option) {
      newOptionValue.setOption(Option)
    }
    return await this.optionValuesEntity.save(newOptionValue)
  }

  findAll() {
    return `This action returns all OptionsValue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} OptionsValue`;
  }

  update(id: number, updateOptionsValueDto: UpdateOptionsValueDto) {
    return `This action updates a #${id} OptionsValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} OptionsValue`;
  }
}
