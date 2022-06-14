function combinationSum3(k: number, n: number): number[][] {
  const resArr: number[][] = []
  function backTracking(
    k: number,
    n: number,
    sum: number,
    startIndex: number,
    tempArr: number[]
  ) {
    if (sum > n) return
    if (tempArr.length === k) {
      if (sum === n) {
        resArr.push([...tempArr])
      }
      return
    }
    for (let i = startIndex; i <= 9 - (k - tempArr.length) + 1; i++) {
      tempArr.push(i)
      backTracking(k, n, sum + i, i + 1, tempArr)
      tempArr.pop()
    }
  }
  backTracking(k, n, 0, 1, [])
  return resArr
}
