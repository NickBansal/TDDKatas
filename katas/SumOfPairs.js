const sum_pairs = (array, sum) => {
    if (array.length > 1) {
        for (let i = 1; i < array.length; i++) {
            if (array[0] + array[i] === sum) {
                return [array[0], array[i]]
            }
        }
        return sum_pairs(array.slice(1), sum)
    }
}

module.exports = sum_pairs