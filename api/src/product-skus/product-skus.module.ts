import { Module } from '@nestjs/common';
import { ProductSkusService } from './product-skus.service';
import { ProductSkusController } from './product-skus.controller';

@Module({
  controllers: [ProductSkusController],
  providers: [ProductSkusService]
})
export class ProductSkusModule {}
