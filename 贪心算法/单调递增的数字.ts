function monotoneIncreasingDigits(n: number): number {
  let narr: number[] = n
    .toString()
    .split('')
    .map((item) => +item)
  let flag: number = Infinity
  for (let i = narr.length - 1; i > 0; i--) {
    if (narr[i] < narr[i - 1]) {
      narr[i] = 9
      flag = i
      narr[i - 1] -= 1
    }
  }
  for (let i = flag; i < narr.length; i++) {
    narr[i] = 9
  }
  // 转换成数字
  n = +narr.join('')
  return n
}
