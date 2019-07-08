const { expect } = require('chai');
const sumPairs = require('../katas/SumOfPairs');

const
  l1 = [1, 4, 8, 7, 3, 15];
const l2 = [1, -2, 3, 0, -6, 1];
const l3 = [20, -13, 40];
const l4 = [1, 2, 3, 4, 1, 0];
const l5 = [10, 5, 2, 3, 7, 5];
const l6 = [4, -2, 3, 3, 4];
const l7 = [0, 2, 0];
const l8 = [5, 9, 13, -3];

describe('Sum of Pairs', () => {
  it('Given an array and a sum, returns an array with the two values', () => {
    expect(sumPairs([1, 2], 3)).to.eql([1, 2]);
    expect(sumPairs(l1, 8)).to.eql([1, 7]);
    expect(sumPairs(l2, -6)).to.eql([0, -6]);
    expect(sumPairs(l3, -7)).to.eql(undefined);
    expect(sumPairs(l4, 2)).to.eql([1, 1]);
    expect(sumPairs(l5, 10)).to.eql([5, 5]);
    expect(sumPairs(l6, 8)).to.eql([4, 4]);
    expect(sumPairs(l7, 0)).to.eql([0, 0]);
    expect(sumPairs(l8, 10)).to.eql([13, -3]);
  });
});
