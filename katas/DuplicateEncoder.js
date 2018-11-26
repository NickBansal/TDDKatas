const DuplicateEncoder = (string) => {
    return string.split('').map(letter => {
        let regex1 = /\W/.test(letter) ? RegExp(`\\${letter}`, 'gi') : RegExp(letter, 'gi')
        return string.match(regex1).length > 1 ? ')' : '('
    }).join('')
}


module.exports = DuplicateEncoder 