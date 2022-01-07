import { Connection } from 'typeorm';
import { UsersEntity } from './users.entity';

export const UsersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(UsersEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];