// function combine(n: number, k: number): number[][] {
//   const resArr: number[][] = []
//   function backTracking(
//     n: number,
//     k: number,
//     startIndex: number,
//     tempArr: number[]
//   ) {
//     if (tempArr.length === k) {
//       resArr.push([...tempArr])
//       return
//     }
//     for (let i = startIndex; i <= n - (k - tempArr.length) + 1; ++i) {
//       tempArr.push(i)
//       backTracking(n, k, i + 1, tempArr)
//       tempArr.pop()
//     }
//   }
//   backTracking(n, k, 1, [])
//   return resArr
// }

function combine(n: number, k: number): number[][] {
  let res: number[][] = []
  let path: number[] = []
  backTracking(n, k, 1)
  return res
  function backTracking(n: number, k: number, i: number) {
    let len = path.length
    if (len === k) {
      res.push([...path])
      return
    }
    // 剪枝优化
    // 最多要从n - (k - len) + 1开始
    // 例如 n = 4  k = 3  则做多要从2开始往下搜索
    for (let j = i; j <= n - (k - len) + 1; j++) {
      path.push(j)
      backTracking(n, k, j + 1)
      path.pop()
    }
  }
}

combine(4, 2)
