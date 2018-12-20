const { car, Vehicle } = require('../katas/BuildaCar')
const { expect } = require('chai')

describe.only('Build a Car', () => {
    it('Creates a new instance of the class', () => {
        expect(new Vehicle()).to.be.an.instanceof(Vehicle);
    })
    it('Returns the correct amount of top layer', () => {
        expect(car(7).body.component.layer1).to.equal(' -----\n')
        expect(car(9).body.component.layer1).to.equal(' -------\n')
        expect(car(11).body.component.layer1).to.equal(' ---------\n')
    })
    it('if length < 7 it throws an error', () => {
        expect(() => car(0)).to.throw()
        expect(() => car(2)).to.throw(RangeError, 'length must be larger then 7')
    })
    it.only('Returns the correct amount of axels and wheels to the bottom layer', () => {
        expect(car(7).chassis.component.layer3).to.equal("-o--o-'")
        expect(car(11).chassis.component.layer3).to.equal("-o------o-'")
        expect(car(12).chassis.component.layer3).to.equal("-o-o-----o-'")
        expect(car(13).chassis.component.layer3).to.equal("-o-o----o-o-'")
        expect(car(16).chassis.component.layer3).to.equal("-o-o-o-----o-o-'")
    })
})

// new Error('Divide by zero is not permitted.')