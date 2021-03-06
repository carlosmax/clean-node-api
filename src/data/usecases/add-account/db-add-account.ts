import {
  AddAccount,
  AccountModel,
  AddAccountModel,
  Hasher,
  AddAccountRepository,
} from './db-add-account-protocols';
import { LoadAccountByEmailRepository } from '../authentication/db-authentication-protocols';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) { }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(accountData.email);
    if (account) {
      return null;
    }

    const hashedPassword = await this.hasher.hash(accountData.password);
    const tempAccount = { ...accountData, password: hashedPassword };
    return this.addAccountRepository.add(tempAccount);
  }
}
