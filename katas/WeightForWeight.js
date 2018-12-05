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
    const keysSorted = Object.keys(lookup).sort((a,b) => lookup[a] - lookup[b])
    const newResult = keysSorted.reduce((acc, item, index) => {
        acc += (`${item} `).repeat(resultLookup[item])
        return acc
    }, "").trim()
    return newResult
}

orderWeight('11 11 2000 10003 22 123 1234000 44444444 9999')

module.exports = orderWeight


// '11 11 2000 10003 22 123 1234000 44444444 9999', 
// '11 11 2000 22 10003 123 1234000 44444444 9999'