import { SignUpController } from '../../../presentation/controllers/signup/signup';
import { DbAddAccount } from '../../../data/usecases/add-account/db-add-account';
import { BcryptAdapter } from '../../../infra/criptografy/bcrypt-adapter';
import { AccountMongoRepository } from '../../../infra/db/mongodb/account-repository/account';
import { Controller } from '../../../presentation/protocols';
import { LogControllerDecorator } from '../../decorators/log';
import { LogMongoRepository } from '../../../infra/db/mongodb/log-repository/log';
import { makeSignUpValidation } from './signup-validation';

export const makeSignUpController = (): Controller => {
  const hasher = new BcryptAdapter(12);
  const accountMongoRepository = new AccountMongoRepository();
  const addAccount = new DbAddAccount(hasher, accountMongoRepository);
  const signUpController = new SignUpController(addAccount, makeSignUpValidation());
  const logMongoRepository = new LogMongoRepository();
  return new LogControllerDecorator(signUpController, logMongoRepository);
};
