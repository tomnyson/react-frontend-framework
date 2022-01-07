import { Connection } from 'typeorm';
import { ProductOptionEntity } from './entities/product-options.entity';

export const ProductOptionProviders = [
  {
    provide: 'PRODUCT_OPTION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ProductOptionEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];