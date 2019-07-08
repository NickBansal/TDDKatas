const isValidWalk = (directions) => {
  const lookup = {
    n: 1, s: -1, e: 1, w: -1,
  };
  return (directions.length !== 10) ? false
    : directions.reduce((acc, value) => {
      acc += lookup[value];
      return acc;
    }, 0) === 0;
};

module.exports = isValidWalk;
