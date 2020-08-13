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
    await this.loadAccountByEmailRepository.loadByEmail(accountData.email);
    const hashedPassword = await this.hasher.hash(accountData.password);
    const tempAccount = { ...accountData, password: hashedPassword };
    const account = await this.addAccountRepository.add(tempAccount);
    return new Promise((resolve) => resolve(account));
  }
}
