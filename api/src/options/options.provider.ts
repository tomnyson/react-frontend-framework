import { Connection } from 'typeorm';
import { OptionEntity } from './entities/options.entity';

export const OptionProviders = [
  {
    provide: 'OPTION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(OptionEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];