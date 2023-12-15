const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1
  return [...chart].reduce((acc, el, i, ar) => {
    if (el === ar[++i]) {
      count++
    } else {
      acc = acc + count + el
      count = 1;
    } return acc
  }, '')
    .split('')
    .filter((el => el != 1))
    .join('')
}


module.exports = {
  encodeLine
};
