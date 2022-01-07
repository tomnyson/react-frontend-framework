import { Injectable, Inject } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { RolesEntity } from '../roles/entities/role.entity';
import { UsersDTO, CreateUserDto } from './users.dto';
import { RolesService } from '../roles/roles.service'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<UsersEntity>,
    private rolesService: RolesService
  ) { }

  async showAll() {
    const data = getRepository(UsersEntity).createQueryBuilder('users')
      .leftJoinAndSelect('users.role', 'role')
      .getMany();
    // return await this.usersRepository.find({ relations: ['role'] });
    return data
  }

  async create(data: CreateUserDto) {
    const user = this.usersRepository.create(data);
    console.log('data.roleId)', data.roleId)
    const role = await this.rolesService.findOne(data.roleId);
    // console.log('role', role)
    const passwordInPlaintext = '12345678';
    const hash = await bcrypt.hash(passwordInPlaintext, 10);
    console.log('hash', hash);
    // data.role = role;
    delete data.roleId;
    const newUser = await this.usersRepository.create({
      ...data,
      password: hash,
      role: role
    });

    await this.usersRepository.save(newUser);
    return user;
  }

  async findByEmail(email: string): Promise<UsersDTO> {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
  async isLogin(email: string, password: string): Promise<UsersDTO> {
    const user = await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return null;
    }
    return user
  }

  async read(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<UsersDTO>) {
    await this.usersRepository.update({ id }, data);
    return await this.usersRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }

}
