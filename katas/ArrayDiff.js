const ArrayDiff = (a, b) => {
    return a.filter(number => !b.some(item => item === number))
}

module.exports = ArrayDiff