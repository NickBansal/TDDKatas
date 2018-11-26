const { expect } = require('chai')
const DuplicateEncoder = require('../katas/DuplicateEncoder')

describe('Duplicate Encoder', () => {
    it('When passed in 0, it returns 0', () => {
        expect(DuplicateEncoder(0)).to.equal(0)
    })
})

