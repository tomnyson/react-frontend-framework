import { IsEmail, IsNotEmpty, Length, IsString, IsInt } from 'class-validator';
import { RolesEntity } from '../roles/entities/role.entity';
export interface UsersDTO {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(3, 10)
  @IsString()
  name: string;

  @IsNotEmpty()
  password: string;

  @IsInt()
  roleId: number;
  role: RolesEntity
}