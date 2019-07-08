const longestConsec = (array, k) => {
  const n = array.length;
  let result = [];
  if (n === 0 || n < k) return '';
  for (let i = 0; i < n; i++) {
    const newResult = array.slice(i, i + k);
    if (newResult.join('').length > result.join('').length) {
      result = newResult;
    }
  }
  return result.join('');
};

module.exports = longestConsec;
