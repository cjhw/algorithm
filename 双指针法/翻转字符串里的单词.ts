function reverseWords(s: string): string {
  // 删除多余空格, 如'   hello     world   ' => 'hello world'
  function delSpace(arr: string[]): void {
    let left: number = 0
    let right: number = 0
    let length: number = arr.length
    while (right < length && arr[right] !== ' ') {
      right++
    }
    while (right < length) {
      if (arr[right] === ' ' && arr[right - 1] !== ' ') {
        right++
        continue
      }
      arr[left] = arr[right]
    }
    if (arr[left - 1] === ' ') {
      arr.length = left - 1
    } else {
      arr.length = left
    }
  }
  // 翻转字符串，如：'hello' => 'olleh'
  function reverseStr(strArr: string[], start: number, end: number): void {
    let temp: string
    while (start < end) {
      temp = strArr[start]
      strArr[start] = strArr[end]
      strArr[end] = temp
      start++
      end++
    }
  }
  let strArr: string[] = s.split('')
  delSpace(strArr)
  let length: number = strArr.length
  reverseStr(strArr, 0, length - 1)
  let start: number = 0
  let end: number = 0
  while (start < length) {
    end = start
    while (end < length && strArr[end] !== ' ') {
      end++
    }
    reverseStr(strArr, start, end)
    start = end + 1
  }
  return strArr.join('')
}
