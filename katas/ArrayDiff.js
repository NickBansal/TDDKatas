const ArrayDiff = (a, b) => a.filter(number => !b.some(item => item === number));

module.exports = ArrayDiff
;