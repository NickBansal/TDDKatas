const { expect } = require('chai')
const orderWeight = require('../katas/WeightForWeight')

describe.only('Weight for weight kata', () => {
    it('Returns the same string when only given one number in the string', () => {
        expect(orderWeight("50")).to.equal('50')
    })
    it('Returns a modified result when given a list of numbers', () => {
        expect(orderWeight('50   51 100')).to.equal("100 50 51")
        expect(orderWeight('2 90 18')).to.equal("2 18 90")
    })
    it('Deals with duplicates', () => {
        expect(orderWeight('1 90 20 100 20 5 11')).to.equal("1 100 11 20 20 5 90")
    })
    it('If two numbers have the same value it will sort them by the first number', () => {
        let value = '11 11 2000 10003 22 123 1234000 44444444 9999'
        let result = '2000 11 11 10003 22 123 1234000 44444444 9999'
        expect(orderWeight(value)).to.equal(value)
    })
    it('If two numbers have the same value it will sort them by the first number', () => {
        let value = '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703'
        expect(orderWeight(value)).to.equal(value)
    })
})