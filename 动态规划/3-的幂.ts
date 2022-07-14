function isPowerOfThree(n: number): boolean {
  let max = 3 ** 19
  return n > 0 && max % n === 0
}
