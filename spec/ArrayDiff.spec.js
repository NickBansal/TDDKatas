const { expect } = require('chai')
const ArrayDiff = require('../katas/ArrayDiff')

describe('Differences between arrays', () => {
    it('if a is empty return an empty array', () => {
        expect(ArrayDiff([], [1])).to.eql([])
    })
    it('Given array with no differences returns the same array', () => {
        expect(ArrayDiff([1, 2], [3, 4])).to.eql([1, 2])
    })
    it('Given array with similarites returns a new array', () => {
        expect(ArrayDiff([1, 2], [1, 4])).to.eql([2])
    })
    it('Given array with similarites returns a new array and deals with duplicates', () => {
        expect(ArrayDiff([1, 2, 2], [2])).to.eql([1])
    })
})