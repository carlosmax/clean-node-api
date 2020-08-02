import { MongoHelper } from '../helpers/mongo-helper';
import { AccountMongoRepository } from './account-mongo-repository';
import { Collection } from 'mongodb';

const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository();
}

describe('Account Mongo Repository', () => {
  let accountCollection: Collection;

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    this.accountCollection = await MongoHelper.getCollection('accounts');
    await this.accountCollection.deleteMany({});
  });

  test('Should return an account on add success', async () => {
    const sut = makeSut();
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe('any_name');
    expect(account.email).toBe('any_email@mail.com');
    expect(account.password).toBe('any_password');
  });

  test('Should return an account on loadByEmail success', async () => {
    const sut = makeSut();
    await this.accountCollection.insertOne({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    const account = await sut.loadByEmail('any_email@mail.com');
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe('any_name');
    expect(account.email).toBe('any_email@mail.com');
    expect(account.password).toBe('any_password');
  });

  test('Should return null if loadByEmail fails', async () => {
    const sut = makeSut();
    const account = await sut.loadByEmail('any_email@mail.com');
    expect(account).toBeFalsy();
  });

  test('Should update the account accessToken on updateAccessToken success', async () => {
    const sut = makeSut();
    const result = await this.accountCollection.insertOne({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    expect(result.ops[0].accessToken).toBeFalsy();
    await sut.updateAccessToken(result.ops[0]._id, 'any_token');
    const account = await this.accountCollection.findOne({ _id: result.ops[0]._id });
    expect(account).toBeTruthy();
    expect(account.accessToken).toBe('any_token');
  });
});