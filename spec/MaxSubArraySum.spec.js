const { expect } = require('chai');
const maxSequence = require('../katas/MaxSubArraySum');

describe('Max sequence of an array', () => {
  it('An empty array returns 0', () => {
    expect(maxSequence([])).to.equal(0);
  });
  it('An array with negative only numbers returns 0', () => {
    expect(maxSequence([-1, -2])).to.equal(0);
  });
  it('An array with positive numbers only returns the sum of the array', () => {
    expect(maxSequence([1, 2, 3])).to.equal(6);
  });
  it('Returns the max consecutive numbers in an array', () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
  });
});
