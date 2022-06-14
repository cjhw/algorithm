function strStr(haystack: string, needle: string): number {
  function getNext(str: string): number[] {
    let next: number[] = []
    let j: number = 0 // j指向前缀末尾
    next[0] = j
    for (let i = 1, length = str.length; i < length; i++) {
      // i指向后缀末尾
      while (j > 0 && str[i] !== str[j]) {
        j = next[j - 1]
      }
      if (str[i] === str[j]) {
        j++
      }
      next[i] = j
    }
    return next
  }
  if (needle.length === 0) return 0
  let next: number[] = getNext(needle)
  let j: number = 0
  for (let i = 0, length = haystack.length; i < length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j
      }
      j++
    }
  }
  return -1
}
