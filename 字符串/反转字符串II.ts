function reverseStr(s: string, k: number): string {
  let left: number
  let right: number
  let temp: string
  let strArr: string[] = s.split('')
  for (let i = 0, length = strArr.length; i < length; i += 2 * k) {
    left = i
    right = i + k - 1 >= length ? length - 1 : i + k - 1
    while (left < right) {
      temp = strArr[left]
      strArr[left] = strArr[right]
      strArr[right] = temp
      left++
      right--
    }
  }
  return strArr.join('')
}
