import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { OptionProviders } from './options.provider'
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OptionsController],
  providers: [...OptionProviders, OptionsService]
})
export class OptionsModule { }
