function mySqrt(x: number): number {
  let left = 0
  let right = x
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (mid * mid < x) {
      left = mid + 1
    } else if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid === x) {
      return mid
    }
  }
  return right
}
