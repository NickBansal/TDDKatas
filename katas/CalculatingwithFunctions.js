const expr  = (number, operation) => (!operation) ? number : operation(number)

const zero  = operand => expr(0, operand)
const one   = operand => expr(1, operand)
const two   = operand => expr(2, operand)
const three = operand => expr(3, operand)
const four  = operand => expr(4, operand)
const five  = operand => expr(5, operand)
const six   = operand => expr(6, operand)
const seven = operand => expr(7, operand)
const eight = operand => expr(8, operand)
const nine  = operand => expr(9, operand)

const plus      = a => b => b + a
const minus     = a => b => b - a;
const times     = a => b => b * a;
const dividedBy = a => b => Math.floor(b / a)


module.exports = { 
    zero, one, two, three, four, five, six, seven, eight, nine,
    plus, minus, times, dividedBy
}
