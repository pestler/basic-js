const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = []  
  for (let a = 0; a < matrix.length; a += 1) {
    const line = []
    for (let b = 0; b < matrix[a].length; b += 1) {
      let mine = 0       
      for (let ai = a - 1; ai <= a + 1; ai += 1) {
        if (matrix[ai] !== undefined) {
          for (let bi = b - 1; bi <= b + 1; bi += 1) {
            if ((ai != a || bi != b) && matrix[ai][bi] === true) {              
              mine +=1
            }
          }
        }
      }
      line.push(mine)
    }
    result.push(line)
  }
  return result
}

module.exports = {
  minesweeper
};
