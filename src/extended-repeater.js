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
function repeater(str, options) {
  const { repeatTimes, separator = '', addition = '', additionRepeatTimes, additionSeparator = '' } = options;
  let arr = [];
  if (repeatTimes === undefined) repeatTimes = 1;
  if (additionRepeatTimes === undefined) additionRepeatTimes = 1;
  if (separator === undefined) separator = '+';
  if (addition === undefined) addition = '';
  if (additionSeparator === undefined) additionSeparator = '|'; 
  for (let i = 0; i < repeatTimes; i++) {
    if (repeatTimes => 1) { arr.push(String(str)) }
    for (let j = 0; j < additionRepeatTimes; j++) {
      (additionRepeatTimes > 1 && j != additionRepeatTimes - 1)
        ? arr.push(String(addition), additionSeparator)
        : arr.push(String(addition))
    }
    if (repeatTimes > 1 && i != repeatTimes - 1) { arr.push(separator) }
  }
  return arr.join('')
}

module.exports = {
  repeater
};
