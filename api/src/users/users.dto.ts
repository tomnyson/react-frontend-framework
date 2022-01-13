import { IsEmail, IsNotEmpty, Length, IsString, IsInt } from 'class-validator';
import { RolesEntity } from '../roles/entities/role.entity';
export interface UsersDTO {
  id: number;
  username?: string;
  email: string;
  password: string;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(3, 10)
  @IsString()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsInt()
  roleId: number;
  role: RolesEntity
}