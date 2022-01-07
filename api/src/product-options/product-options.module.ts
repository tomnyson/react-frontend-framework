import { Module } from '@nestjs/common';
import { ProductOptionsService } from './product-Options.service';
import { ProductOptionsController } from './product-Options.controller';
import { ProductOptionProviders } from './product-options.provider'
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ProductOptionsController],
  providers: [...ProductOptionProviders, ProductOptionsService]
})
export class ProductOptionsModule { }
