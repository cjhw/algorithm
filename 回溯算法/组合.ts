function combine(n: number, k: number): number[][] {
  const resArr: number[][] = []
  function backTracking(
    n: number,
    k: number,
    startIndex: number,
    tempArr: number[]
  ) {
    if (tempArr.length === k) {
      resArr.push([...tempArr])
      return
    }
    for (let i = startIndex; i <= n - (k - tempArr.length) + 1; ++i) {
      tempArr.push(i)
      backTracking(n, k, i + 1, tempArr)
      tempArr.pop()
    }
  }
  backTracking(n, k, 1, [])
  return resArr
}
