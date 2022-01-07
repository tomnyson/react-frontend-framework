import { Injectable, Inject } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesEntity } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private rolesRepository: Repository<RolesEntity>,
  ) { }
  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role';
  }

  findAll() {
    return `This action returns all roles`;
  }

  async findOne(id: number) {
    return await this.rolesRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
