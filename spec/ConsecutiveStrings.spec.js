const { expect } = require('chai');
const longestConsec = require('../katas/ConsecutiveStrings');

describe('Consecutive Strings', () => {
  it('If given an array with 0 length return empty string', () => {
    expect(longestConsec([], 0)).to.equal('');
  });
  it('If the length af the given array is less then k return empty string', () => {
    expect(longestConsec(['a', 'b'], 3)).to.equal('');
  });
  it('If second argument is <= 0 return empty string', () => {
    expect(longestConsec([], 0)).to.equal('');
  });
  it('Given an array of strings, return the longest consecutive strings', () => {
    expect(longestConsec(['a', 'bc', 'def'], 2)).to.equal('bcdef');
  });
  it('Given an array of strings, return the longest consecutive strings', () => {
    expect(longestConsec(['abc', 'd', 'efgh', 'ij', 'klmno'], 3)).to.equal('efghijklmno');
  });
});
