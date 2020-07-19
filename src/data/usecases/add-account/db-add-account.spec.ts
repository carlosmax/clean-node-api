import { DbAddAccount } from "./db-add-account";
import { Encrypter } from "../../protocols/encrypter";

interface SutTypes {
  sut: DbAddAccount;
  encryptStub: Encrypter;
}

const makeEncrypter = (): Encrypter => {
  class EncrypterStub implements Encrypter {
    async encrypt (value: string): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'));
    }
  }

  return new EncrypterStub();
}

const makeSut = (): SutTypes => {
  const encryptStub = makeEncrypter();
  const sut = new DbAddAccount(encryptStub);

  return {
    sut,
    encryptStub
  }
}

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', () => {
    const { sut, encryptStub } = makeSut();
    const encryptSpy = jest.spyOn(encryptStub, 'encrypt');
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    };
    sut.add(accountData);
    expect(encryptSpy).toHaveBeenCalledWith('valid_password');
  });
});