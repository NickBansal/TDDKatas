const { expect } = require('chai');
const DirectionsReduction = require('../katas/DirectionsReduction');

describe('Directions Reduction', () => {
  it('when given EAST, returns EAST', () => {
    expect(DirectionsReduction(['EAST'])).to.eql(['EAST']);
    expect(DirectionsReduction(['WEST'])).to.eql(['WEST']);
    expect(DirectionsReduction(['NORTH'])).to.eql(['NORTH']);
    expect(DirectionsReduction(['SOUTH'])).to.eql(['SOUTH']);
  });
  it('[NORTH, SOUTH] will return an empty array', () => {
    expect(DirectionsReduction(['NORTH', 'SOUTH'])).to.eql([]);
  });
  it('[WEST, EAST] will return an empty array', () => {
    expect(DirectionsReduction(['WEST', 'EAST'])).to.eql([]);
  });
  it('[WEST, EAST, NORTH, SOUTH] will return an empty array', () => {
    expect(DirectionsReduction(['NORTH', 'SOUTH', 'EAST', 'WEST'])).to.eql([]);
  });
  it('[WEST, EAST, WEST] will return [ WEST ]', () => {
    expect(DirectionsReduction(['WEST', 'EAST', 'WEST'])).to.eql(['WEST']);
  });
  it('[NORTH, SOUTH, NORTH] will return NORTH', () => {
    expect(DirectionsReduction(['NORTH', 'SOUTH', 'NORTH'])).to.eql(['NORTH']);
  });
  it('Expect top return WEST', () => {
    expect(DirectionsReduction(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])).to.eql(['WEST']);
  });
});
