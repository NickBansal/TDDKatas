const car = require('../katas/BuildaCar')
const { expect } = require('chai')

describe.only('Build a Car', () => {
    it('return 0', () => {
        expect(car(0)).to.equal(0)
    })
})