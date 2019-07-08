const maxSequence = (array) => {
  let currentScore = 0;
  let maxScore = 0;
  array.forEach((element) => {
    maxScore += element;
    if (maxScore < 0) maxScore = 0;
    if (currentScore < maxScore) currentScore = maxScore;
  });
  return currentScore;
};

module.exports = maxSequence;
