function solveNQueens(n: number): string[][] {
  let res: string[][] = []
  let path: number[] = []
  backTracking(0, path)
  return res
  function backTracking(row: number, tmp: number[]) {
    if (row === n) {
      res.push(
        tmp.map((c) => {
          let arr = new Array(n).fill('.')
          arr[c] = 'Q'
          return arr.join('')
        })
      )
    }
    for (let col = 0; col < n; col++) {
      let canNotSet = tmp.some((c, r) => {
        return c === col || r - c === row - col || r + c === row + col
      })
      if (canNotSet) {
        continue
      }
      backTracking(row + 1, [...tmp, col])
    }
  }
}

solveNQueens(4)
