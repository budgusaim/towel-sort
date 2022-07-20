
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return []
  } else {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        res.push(...matrix[i])
      } else {
        res.push(...(matrix[i].sort((a, b) => { return b - a })))
      }
    }
    return res
  }
}
