import { expect } from 'chai';
import { NumbersValidator } from '../../app/numbers_validator.js';

describe('isInteger positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should provide true with a number', () => {
    const validationResults = validator.isInteger(3);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isInteger('7');
    }).to.throw('[7] is not a number');
  });
});
