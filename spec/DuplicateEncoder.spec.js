const { expect } = require('chai');
const DuplicateEncoder = require('../katas/DuplicateEncoder');

describe('Duplicate Encoder', () => {
  it('When passed in A, it returns (', () => {
    expect(DuplicateEncoder('A')).to.equal('(');
  });
  it('When passed in a word with no duplicates, it returns a new string', () => {
    expect(DuplicateEncoder('Ace')).to.equal('(((');
  });
  it('When passed a word with duplicate letters, returns a new string', () => {
    expect(DuplicateEncoder('Hello')).to.equal('(())(');
  });
  it('Check to see if this works with spaces', () => {
    expect(DuplicateEncoder('(( @')).to.equal('))((');
  });
  it('Recede should return ()()()', () => {
    expect(DuplicateEncoder('Recede')).to.equal('()()()');
  });
});
