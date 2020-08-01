import {
  AddAccount,
  AccountModel,
  AddAccountModel,
  Hasher,
  AddAccountRepository,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  private readonly hasher: Hasher;
  private readonly addAccountRepository: AddAccountRepository;

  constructor(hasher: Hasher, addAccountRepository: AddAccountRepository) {
    this.hasher = hasher;
    this.addAccountRepository = addAccountRepository;
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.hasher.hash(accountData.password);
    const tempAccount = { ...accountData, password: hashedPassword };
    const account = await this.addAccountRepository.add(tempAccount);
    return new Promise((resolve) => resolve(account));
  }
}
