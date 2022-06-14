function exist(board: string[][] | null[][], word: string): boolean {
  if (board.length === 0) {
    return false
  }
  if (word.length === 0) {
    return true
  }
  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const res = find(i, j, 0)
      if (res) {
        return res
      }
    }
  }

  return false

  function find(i: number, j: number, cur: number): boolean {
    if (i >= row || i < 0) {
      return false
    }
    if (j >= col || j < 0) {
      return false
    }

    let letter: string | null = board[i][j]
    if (letter !== word[cur]) {
      return false
    }
    if (cur === word.length - 1) {
      return true
    }
    board[i][j] = null
    const res =
      find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1)
    board[i][j] = letter
    return res
  }
}
