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
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let newarr = []
  arr.forEach(function (el, i, ar) {
    if (ar[i] === '--discard-next') {
      newarr.push(arr[i + 1])
      newarr.pop()
    } else if (ar[i] === '--discard-prev') {
      newarr.pop()
    } else if (ar[i] === '--double-next') {
      newarr.push(arr[i + 1])
    } else if (ar[i] === '--double-prev') {
      newarr.pop(arr[i - 1])
    } else {
      newarr.push(arr[i])
    }
  })
  return newarr = newarr.filter((el) => el !== undefined)
}

module.exports = {
  transform
};
