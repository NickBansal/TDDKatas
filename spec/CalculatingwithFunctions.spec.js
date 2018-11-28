const { expect } = require('chai')
const { 
    zero, one, two, three, four, 
    five, six, seven, eight, nine,
    plus, minus, times, dividedBy 
} = require('../katas/CalculatingwithFunctions')

describe.only('Calculating with Functions', () => {
    it('A Number function returns that same number', () => {
        expect(zero()).to.equal(0)
        expect(one()).to.equal(1)
        expect(two()).to.equal(2)
        expect(three()).to.equal(3)
        expect(four()).to.equal(4)
        expect(five()).to.equal(5)
        expect(six()).to.equal(6)
        expect(seven()).to.equal(7)
        expect(eight()).to.equal(8)
        expect(nine()).to.equal(9)
    })
    it('An Operand function returns that same operand', () => {
        expect(plus()).to.equal('+')
        expect(minus()).to.equal('-')
        expect(times()).to.equal('*')
        expect(dividedBy()).to.equal('/')
    })
    it('Adding two numbers should return their sum', () => {
        expect(one(plus(two()))).to.equal(3)
        expect(three(plus(eight()))).to.equal(11)
    })
    it('Subtracting two numbers should return their sum', () => {
        expect(one(minus(two()))).to.equal(-1)
        expect(nine(minus(five()))).to.equal(4)
    })
    it('Multiplying two numbers should return their sum', () => {
        expect(five(times(two()))).to.equal(10)
        expect(nine(times(three()))).to.equal(27)
    })
    it('Diving two numbers should return their sum', () => {
        expect(six(dividedBy(two()))).to.equal(3)
        expect(nine(dividedBy(three()))).to.equal(3)
        expect(eight(dividedBy(three()))).to.equal(2)
    })
})