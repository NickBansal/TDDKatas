const array_diff = (a, b) => {
    // if (a.length === 0) return []
    return a.filter(number => !b.some(item => item === number))
}

module.exports = array_diff