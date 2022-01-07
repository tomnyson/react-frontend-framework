import { Injectable, Inject } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository, getManager } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(@Inject('CATEGORIES_REPOSITORY')
  private categoriesRepository: Repository<CategoryEntity>) { }

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = new CategoryEntity()
    newCategory.name = createCategoryDto.name;
    // get parent current
    newCategory.parent = null
    if (createCategoryDto.parent !== 0) {
      const parentCategory = await this.categoriesRepository.findOne({
        where: { id: createCategoryDto.parent }
      })
      if (parentCategory) {
        newCategory.setParent(parentCategory)
      }
    }
    newCategory.setChildren(null)
    console.log('newCategory', newCategory)
    return await this.categoriesRepository.save(newCategory)
  }

  async findAll() {
    const manager = getManager();
    const trees = await manager.getTreeRepository(CategoryEntity).findTrees();
    return trees
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
