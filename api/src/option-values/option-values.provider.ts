import { Connection } from 'typeorm';
import { OptionValuesEntity } from './entities/option-values.entity';

export const OptionValueProviders = [
  {
    provide: 'OPTION_VALUES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(OptionValuesEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];