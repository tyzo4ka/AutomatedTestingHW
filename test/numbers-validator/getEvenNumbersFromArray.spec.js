import { expect } from 'chai';
import { NumbersValidator } from '../../app/numbers_validator.js';

describe('getEvenNumbersFromArray', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [7, 8, 4, 13, 14];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([8, 4, 14]);
  });

  it('should throw an error if array is not full of numbers', () => {
    const arrayOfValues = [2, 11, '5', '8', 16];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[2,11,5,8,16] is not an array of "Numbers"');
  });
});
