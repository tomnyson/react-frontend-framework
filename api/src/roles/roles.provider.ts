import { Connection } from 'typeorm';
import { RolesEntity } from './entities/role.entity';

export const RolesProviders = [
  {
    provide: 'ROLE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(RolesEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];