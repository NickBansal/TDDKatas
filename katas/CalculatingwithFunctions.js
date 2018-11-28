const expr = (number, operation) => {
    return (!operation) ? number : operation(number)
}

const zero = (operand) => {
    return expr(0, operand)
}
const one = operand => {
    return expr(1, operand)
}
const two = (operand) => {
    return expr(2, operand)
}
const three = (operand) => {
    return expr(3, operand)
}
const four = (operand) => {
    return expr(4, operand)
}
const five = (operand) => {
    return expr(5, operand)
}
const six = (operand) => {
    return expr(6, operand)
} 
const seven = (operand) => {
    return expr(7, operand)
} 
const eight = (operand) => {
    return expr(8, operand)
} 
const nine = (operand) => {
    return expr(9, operand)
} 

const plus = a => b => b + a
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => Math.floor(b / a)


module.exports = { 
    zero, one, two, three, four, five, six, seven, eight, nine,
    plus, minus, times, dividedBy
}
