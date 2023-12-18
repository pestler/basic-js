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
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  const strArr = [str];

  for (let a = 0; a < additionRepeatTimes; a += 1) {
    strArr.push(addition)
    strArr.push(additionSeparator)
  }
  strArr.pop(additionSeparator)
  const result = []

  for (let b = 0; b < repeatTimes; b += 1) {    
    result.push(strArr)
    result.push(separator)    
  }

  result.pop(separator)  

  //console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')
  return result.join('').replaceAll(/,/g, "")
}

module.exports = {
  repeater
};
