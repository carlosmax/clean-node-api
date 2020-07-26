import { SignUpController } from '../../presentation/controllers/signup/signup';
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter';
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { BcryptAdapter } from '../../infra/criptografy/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account';
import { Controller } from '../../presentation/protocols';
import { LogControllerDecorator } from '../decorators/log';

export const makeSignUpController = (): Controller => {
  const emailValidatorAdapter = new EmailValidatorAdapter();
  const encrypter = new BcryptAdapter(12);
  const accountMongoRepository = new AccountMongoRepository();
  const addAccount = new DbAddAccount(encrypter, accountMongoRepository);
  const signUpController = new SignUpController(emailValidatorAdapter, addAccount);

  return new LogControllerDecorator(signUpController);
};
