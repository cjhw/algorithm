function reverseLeftWords(s: string, n: number): string {
  function reverseWords(strArr: string[], start: number, end: number): void {
    let temp: string
    while (start < end) {
      temp = strArr[start]
      strArr[start] = strArr[end]
      strArr[end] = temp
      start++
      end--
    }
  }
  let strArr: string[] = s.split('')
  let length = strArr.length
  reverseWords(strArr, 0, n - 1)
  reverseWords(strArr, n, length - 1)
  reverseWords(strArr, 0, length - 1)
  return strArr.join('')
}
