import { expect } from 'chai';
import { NumbersValidator } from '../../app/numbers_validator.js';

describe('isAllNumbers positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should provide true if all are numbers', () => {
    const validationResults = validator.isAllNumbers([2, 4, 1, 8, 90]);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error if all are not numbers', () => {
    expect(() => {
      validator.isAllNumbers('c');
    }).to.throw('[c] is not an array');
  });
});
