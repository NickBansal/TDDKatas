const { expect } = require('chai')
const DirectionsReduction = require('../katas/DirectionsReduction')

describe.only("Directions Reduction", () => {
    it('when given EAST, returns EAST', () => {
        expect(DirectionsReduction(['EAST'])).to.eql(['EAST'])
        expect(DirectionsReduction(['WEST'])).to.eql(['WEST'])
        expect(DirectionsReduction(['NORTH'])).to.eql(['NORTH'])
        expect(DirectionsReduction(['SOUTH'])).to.eql(['SOUTH'])
    })
    it('[NORTH, SOUTH] will return an empty array', () => {
        expect(DirectionsReduction(['NORTH', 'SOUTH'])).to.eql([])
    })
})