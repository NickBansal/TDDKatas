const rot13 = (message) => {
    return message.split('').reduce((acc, value) => {
        let characterCode = value.charCodeAt(0)

        let newValue = /[a-z]/.test(value) && characterCode + 13 > 122
            || /[A-Z]/.test(value) && characterCode + 13 > 90 ?
            (characterCode + 13) - 26 :
            !/[a-z]/i.test(value) ?
                characterCode : characterCode + 13

        acc += String.fromCharCode(newValue)
        return acc
    }, '')
}

module.exports = rot13

