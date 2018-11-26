const DuplicateEncoder = (string) => {
    return string.split('').map(letter => {
        let regex1 = RegExp(`\\${letter}` + `{2,}`)
        return regex1.test(string) ? ')' : '('
    }).join('')
}


module.exports = DuplicateEncoder 