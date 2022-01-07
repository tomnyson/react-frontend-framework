import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesProviders } from './roles.provider';
import { RolesController } from './roles.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [...RolesProviders, RolesService],
  exports: [RolesService]
})
export class RolesModule { }
