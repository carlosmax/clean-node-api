import { DbAuthentication } from '../../../../../data/usecases/authentication/db-authentication';
import { AccountMongoRepository } from '../../../../../infra/db/mongodb/account/account-mongo-repository';
import { JwtAdapter } from '../../../../../infra/criptografy/jwt-adapter/jwt-adapter';
import { BcryptAdapter } from '../../../../../infra/criptografy/bcrypt-adapter/bcrypt-adapter';
import { Authentication } from '../../../../../domain/usecases/authentication';
import env from '../../../../config/env';

export const makeDbAuthentication = (): Authentication => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const accountMongoRepository = new AccountMongoRepository();
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository);
};
