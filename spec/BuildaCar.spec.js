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
        expect(() => car(0, 1)).to.throw()
        expect(() => car(2, 1)).to.throw(RangeError, 'length must be larger then 7')
    })
    it('Returns the correct amount of axels and wheels to the bottom layer', () => {
        expect(car(7, 0).chassis.component.layer3).to.equal("-o--o-'")
        expect(car(11, 0).chassis.component.layer3).to.equal("-o------o-'")
        expect(car(12, 0).chassis.component.layer3).to.equal("-o-o-----o-'")
        expect(car(13).chassis.component.layer3).to.equal("-o-o------o-'")
        expect(car(16).chassis.component.layer3).to.equal("-o-o-o-----o-o-'")
        expect(car(17).chassis.component.layer3).to.equal("-o-o-o------o-o-'")
    })
    it.only('Returns the correct amount of doors and spaces', () => {
        expect(car(7, 1).body.component.layer2).to.equal("|  []\\")
        expect(car(7, 2).body.component.layer2).to.equal("|[][]\\")
    })
})
