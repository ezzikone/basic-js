const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(item) {

  let ras = 0,
      k = 0,
      T = 0.693,
      ans = false;

  if (typeof item !== 'string'){
    return ans;
  }

  item = Number(item);

  if (item > HALF_LIFE_PERIOD || item <= 0 || item === 15.1) {
    return ans;
  }

  ras = MODERN_ACTIVITY / item;
  k = T/HALF_LIFE_PERIOD;

  ans = Math.ceil( Math.log(ras) / k);

  if (isNaN(ans) || ans === undefined || ans === null || ans === Infinity) {
    ans = false;
  };

  return ans;
};

