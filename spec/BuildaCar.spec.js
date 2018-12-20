const car = require('../katas/BuildaCar')
const { expect } = require('chai')

describe.only('Build a Car', () => {
    it('Returns the correct amount of top layer', () => {
        expect(car(7).body.component.layer1).to.equal(' ------')
        expect(car(9).body.component.layer1).to.equal(' --------')
        expect(car(11).body.component.layer1).to.equal(' ----------')
    })
    it('if length < 7 it throws an error', () => {
        expect(car(0)).to.throw(Error)
    })
})

// new Error('Divide by zero is not permitted.')