const { expect } = require('chai')
const longestConsec = require('../katas/ConsecutiveStrings')

describe.only('Consecutive Strings', () => {
    it('If given an array with 0 length return empty string', () => {
        expect(longestConsec([], 0)).to.equal("")
    })
    it('If the length af the given array is less then k return empty string', () => {
        expect(longestConsec(['a', 'b'], 3)).to.equal("")
    })
})