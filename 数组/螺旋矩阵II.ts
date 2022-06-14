function generateMatrix(n: number): number[][] {
  let startX = 0
  let startY = 0 // 起始位置
  let loop = Math.floor(n / 2) // 旋转圈数
  let mid = Math.floor(n / 2) // 中间位置
  let offset = 1 // 控制每一层填充元素个数
  let count = 1 // 更新填充数字
  let res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  while (loop--) {
    let row = startX
    let col = startY
    for (; col < startX + n - offset; col++) {
      res[row][col] = count++
    }
    for (; row < startY + n - offset; row++) {
      res[row][col] = count++
    }
    for (; col > startX; col--) {
      res[row][col] = count++
    }
    for (; row > startY; row--) {
      res[row][col] = count++
    }

    // 更新起始位置
    startX++
    startY++

    // 更新offset
    offset += 2
  }
  if (n % 2 === 1) {
    res[mid][mid] = count
  }
  return res
}

console.log(generateMatrix(1))
