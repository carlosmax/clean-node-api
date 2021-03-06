import { RequiredFieldValidation } from './required-field-validation';
import { MissingParamError } from '../../presentation/erros';

describe('Required Field Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field');
    const error = sut.validate({ name: 'any_name' });
    expect(error).toEqual(new MissingParamError('field'));
  });

  test('Should not return if validation succeed', () => {
    const sut = new RequiredFieldValidation('field');
    const error = sut.validate({ field: 'any_field' });
    expect(error).toBeFalsy();
  });
});
