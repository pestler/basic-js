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
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`
    )
  let arrFilter = arr
  let arrNew = []
  arrFilter.forEach((el, i, ar) => {
    if(ar[i-1] === '--discard-next')  arrNew.push(undefined) 
    else switch (el) {
      case '--discard-next':
        arrNew.push(undefined)
        break
      case '--discard-prev':
        arrNew.pop()
        break
      case '--double-next':
        arrNew.push(ar[i + 1])
        break
      case '--double-prev':
        arrNew.push(arrNew.at(-1))
        break
      default:
        arrNew.push(el)
        break
    }
  })
  return arrNew.filter((el) => el !== undefined)
}

module.exports = {
  transform
};
