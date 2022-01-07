import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RolesEntity } from '../roles/entities/role.entity'
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => RolesEntity, role => role.users)
  role: RolesEntity;
}