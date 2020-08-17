import { LoadAccountByToken } from '../../../domain/usecases/load-account-by-token';
import { AccountModel } from '../../../domain/models/account';
import { Decrypter } from '../../protocols/criptography/decrypter';

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor(private readonly decrypter: Decrypter) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async load(accessToken: string, role?: string): Promise<AccountModel> {
    await this.decrypter.decrypt(accessToken);
    return null;
  }
}
