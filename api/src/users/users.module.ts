import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersProviders } from './users.provider';
import { DatabaseModule } from '../database/database.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [DatabaseModule, RolesModule],
  controllers: [UsersController],
  providers: [...UsersProviders, UsersService],
  exports: [UsersService]
})
export class UsersModule { }