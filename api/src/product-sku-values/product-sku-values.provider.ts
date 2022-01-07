import { Connection } from 'typeorm';
import { ProductSkuValuesEntity } from './entities/product-sku-value.entity';

export const ProductSkuValuesProviders = [
  {
    provide: 'PRODUCT_OPTION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ProductSkuValuesEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];