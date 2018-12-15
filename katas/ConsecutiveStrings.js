const longestConsec = (array, k) => {
    const n = array.length
    if (n === 0 || n < k) return ""
    return array.reduce((acc, value, index) => {
        if (index === 0) {
            for (let i=0; i<k; i++) {
                acc.push(array[index + i])
            }
        }
        if (index > 0 && index <= array.length - k) {
            let checker = []
            for (let i=0; i<k; i++) {
                checker.push(array[index + i])
            }
            if (checker.join('').length > acc.join('').length) {
                acc = checker
            }
        }
        return acc
    }, []).join('')
}

module.exports = longestConsec