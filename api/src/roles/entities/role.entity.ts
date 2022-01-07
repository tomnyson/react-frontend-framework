import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UsersEntity } from '../../users/users.entity'
@Entity('roles')
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UsersEntity, users => users.role)
  users: UsersEntity[];
}
