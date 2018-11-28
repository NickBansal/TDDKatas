function notEval(fn) {
    return Math.floor(new Function('return ' + fn)());
}

const zero = (operand) => {
    return operand ? notEval([0,...operand].join('')) : 0
}
const one = operand => {
    return operand ? notEval([1,...operand].join('')) : 1
}
const two = (operand) => {
    return operand ? notEval([2,...operand].join('')) : 2
}
const three = (operand) => {
    return operand ? notEval([3,...operand].join('')) : 3
}
const four = (operand) => {
    return operand ? notEval([4,...operand].join('')) : 4
}
const five = (operand) => {
    return operand ? notEval([5,...operand].join('')) : 5
}
const six = (operand) => {
    return operand ? notEval([6,...operand].join('')) : 6
} 
const seven = (operand) => {
    return operand ? notEval([7,...operand].join('')) : 7
} 
const eight = (operand) => {
    return operand ? notEval([8,...operand].join('')) : 8
} 
const nine = (operand) => {
    return operand ? notEval([9,...operand].join('')) : 9
} 

const plus = (number) => {
    return number ? ['+',number] : '+'
}
const minus = (number) => {
    return number ? ['-', number] : '-'
}
const times = (number) => {
    return number ? ['*', number] : '*'
}
const dividedBy = (number) => {
    return number ? ['/', number] : '/'
}

module.exports = { 
    zero, one, two, three, four, five, six, seven, eight, nine,
    plus, minus, times, dividedBy
}
