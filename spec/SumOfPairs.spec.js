const { expect } = require('chai')
const sum_pairs = require('../katas/SumOfPairs')

const 
l1= [1, 4, 8, 7, 3, 15],
l2= [1, -2, 3, 0, -6, 1],
l3= [20, -13, 40],
l4= [1, 2, 3, 4, 1, 0],
l5= [10, 5, 2, 3, 7, 5],
l6= [4, -2, 3, 3, 4],
l7= [0, 2, 0],
l8= [5, 9, 13, -3];

describe('Sum of Pairs', () => {
    it('Given an array and a sum, returns an array with the two values', () => {
        expect(sum_pairs([1,2], 3)).to.eql([1, 2])
        expect(sum_pairs(l1, 8)).to.eql([1, 7])
        expect(sum_pairs(l2, -6)).to.eql([0, -6])
        expect(sum_pairs(l3, -7)).to.eql(undefined)
        expect(sum_pairs(l4, 2)).to.eql([1, 1])
        expect(sum_pairs(l5, 10)).to.eql([5, 5])
        expect(sum_pairs(l6, 8)).to.eql([4, 4])
        expect(sum_pairs(l7, 0)).to.eql([0, 0])
        expect(sum_pairs(l8, 10)).to.eql([13, -3])
    })   
})
