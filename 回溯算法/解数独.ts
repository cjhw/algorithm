function solveSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        continue
      }
      // 开始放数字
      // 可以放1-9
      for (let k: any = 1; k <= 9; k++) {
        k = k.toString()
        // 判断合不合理
        if (isValid(board, i, j, k)) {
          board[i][j] = k
          // 放下一个数字的解
          if (solveSudoku(board)) {
            return true
          }
          board[i][j] = '.'
        }
      }
      return false
    }
  }
  return true //找到解 放完了
}

function isValid(
  board: string[][],
  row: number,
  col: number,
  k: string
): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === k || board[i][col] === k) {
      return false
    }
  }
  const x = Math.floor(row / 3) * 3
  const y = Math.floor(col / 3) * 3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === k) {
        return false
      }
    }
  }
  return true
}
