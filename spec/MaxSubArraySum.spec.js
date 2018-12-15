const { expect } = require('chai')
const maxSequence = require('../katas/MaxSubArraySum')

describe.only('Max sequence of an array', () => {
    it('When given an empty array', () => {
        expect(maxSequence([])).to.eql([])
    })
})