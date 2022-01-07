import { Connection } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';

export const CategoriesProviders = [
  {
    provide: 'CATEGORIES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CategoryEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];