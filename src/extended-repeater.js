const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
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
  repeater
};
