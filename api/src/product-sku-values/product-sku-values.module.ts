import { Module } from '@nestjs/common';
import { ProductSkuValuesService } from './product-sku-values.service';
import { ProductSkuValuesController } from './product-sku-values.controller';
import { ProductSkuValuesProviders } from './product-sku-values.provider'
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductSkuValuesController],
  providers: [...ProductSkuValuesProviders, ProductSkuValuesService]
})
export class ProductSkuValuesModule { }
