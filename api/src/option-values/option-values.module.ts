import { Module } from '@nestjs/common';
import { OptionsValueService } from './option-values.service';
import { OptionsValueController } from './option-values.controller';
import { DatabaseModule } from '../database/database.module';
import { OptionValueProviders } from './option-values.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [OptionsValueController],
  providers: [...OptionValueProviders, OptionsValueService]
})
export class OptionValuesModule { }
