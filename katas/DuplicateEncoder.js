const DuplicateEncoder = string => string.split('').map((letter) => {
  const regex1 = /\W/.test(letter) ? RegExp(`\\${letter}`, 'gi') : RegExp(letter, 'gi');
  return string.match(regex1).length > 1 ? ')' : '(';
}).join('');


module.exports = DuplicateEncoder;
