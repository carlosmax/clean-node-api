import { CompareFieldsValidation } from './compare-fields-validation';
import { InvalidParamError } from '../../erros';

describe('Compare Fields Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new CompareFieldsValidation('field', 'fieldToCompare');
    const error = sut.validate({
      field: 'any_field',
      fieldToCompare: 'wrong_value'
    });
    expect(error).toEqual(new InvalidParamError('fieldToCompare'));
  });

  test('Should not return if validation succeed', () => {
    const sut = new CompareFieldsValidation('field', 'fieldToCompare');
    const error = sut.validate({
      field: 'any_field',
      fieldToCompare: 'any_field'
    });
    expect(error).toBeFalsy();
  });
});
