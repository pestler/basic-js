const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  if (!arr.length) return [];
  let newarr = []
  arr.forEach(function (el, i, ar) {   
    if (el === '--discard-next') {
      newarr.push(ar[i + 1])
    } else if (el === '--discard-prev') {
      newarr.pop()
    } else if (el === '--double-next') {
      newarr.push(ar[i + 1])
    } else if (el === '--double-prev') {
      newarr.pop(ar[i - 1])
    } else {
      newarr.push(el)
    }
  })
  return newarr = newarr.filter((el) => el !== undefined)
}

module.exports = {
  transform
};
