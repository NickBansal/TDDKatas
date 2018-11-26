const { expect } = require('chai')
const isValidWalk = require('../katas/TakeaTenMinuteWalk')

describe('Take a ten minute walk', () => {
    it("If given an array which does not have length of 10, return false", () => {
        expect(isValidWalk(['n', 's', 'e', 'w'])).to.equal(false)
        expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).to.equal(false)
    })
    it('If given a route which takes you back to your location and has length of 10, return true', () => {
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).to.equal(true)
        expect(isValidWalk(['n','n','n','n','s','s','s','s','w','e'])).to.equal(true)
    })
})