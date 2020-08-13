import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository';
import { BcryptAdapter } from '../../../../infra/criptografy/bcrypt-adapter/bcrypt-adapter';
import { AddAccount } from '../../../../domain/usecases/add-account';
import { DbAddAccount } from '../../../../data/usecases/add-account/db-add-account';

export const makeDbAddAccount = (): AddAccount => {
  const hasher = new BcryptAdapter(12);
  const accountMongoRepository = new AccountMongoRepository();
  return new DbAddAccount(hasher, accountMongoRepository, accountMongoRepository);
};
