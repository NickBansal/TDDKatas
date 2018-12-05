const orderWeight = string => {
    const lookup = {}
    const resultLookup = {}
    const numCheck = string.split(' ').filter(item => item !== '')
    const newString = numCheck.map(number => {
        return number.split('').map(Number).reduce((acc, num) => {
            acc += num
            return acc
        }, 0)
    })
    numCheck.forEach((item, index) => {
        lookup[item] = newString[index]
        resultLookup[item] ? resultLookup[item]++ : resultLookup[item] = 1
    })
    const keysSorted = Object.keys(lookup).sort((a,b) => {
        if (lookup[a] === lookup[b] && Number(a[0]) !== Number(b[0])) {
            return Number(a[0]) - Number(b[0])
        } else if (lookup[a] === lookup[b] && Number(a[0]) === Number(b[0])) {
            return Number(a) - Number(b)
        } else return lookup[a] - lookup[b]
    })
    const newResult = keysSorted.reduce((acc, item, index) => {
        acc += (`${item} `).repeat(resultLookup[item])
        return acc
    }, "").trim()
    return newResult
}

module.exports = orderWeight
