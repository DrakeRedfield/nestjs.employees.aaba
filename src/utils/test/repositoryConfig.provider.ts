import { getRepositoryToken } from '@nestjs/typeorm';

export const getRepositoryConfig = (entity) => {
  return {
    provide: getRepositoryToken(entity),
    useValue: {
      create: jest.fn(),
      save: jest.fn(),
      findOne: jest.fn(),
    },
  };
};
