const rot13 = require('../katas/Rot13')
const { expect } = require('chai')

describe.only('Rot13', () => {
    it('When given a single lowercase character it returns a letter 13 letters away', () => {
        expect(rot13('a')).to.equal('n') 
        expect(rot13('C')).to.equal('P')
    })
    it('Goes back to the beginning and returns the letter', () => {
        expect(rot13('t')).to.equal('g')
        expect(rot13('V')).to.equal('I')
    })
    it('When given a sentence it returns a new sentence 13 chars away', () => {
        expect(rot13('At')).to.equal('Ng')
        expect(rot13('ACE')).to.equal('NPR')
        expect(rot13('Zest')).to.equal('Mrfg')
    })
    it('When given a sentence with numbers, the numbers do not change', () => {
        expect(rot13('A1')).to.equal('N1')
        expect(rot13('Z6')).to.equal('M6')
    })
    it('When given a sentence with spaces, the spaces do not change', () => {
        expect(rot13('A 1')).to.equal('N 1')
        expect(rot13('Z 6')).to.equal('M 6')
    })
})