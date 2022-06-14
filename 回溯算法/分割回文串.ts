function partition(s: string): string[][] {
  function isPalindromeStr(s: string, left: number, right: number) {
    while (left < right) {
      if (s[left++] !== s[right--]) {
        return false
      }
    }
    return true
  }
  function backTracking(s: string, startIndex: number, route: string[]) {
    let length: number = s.length
    if (length === startIndex) {
      resArr.push(route.slice())
      return
    }
    for (let i = startIndex; i < length; i++) {
      if (isPalindromeStr(s, startIndex, i)) {
        route.push(s.slice(startIndex, i + 1))
        backTracking(s, i + 1, route)
        route.pop()
      }
    }
  }
  const resArr: string[][] = []
  backTracking(s, 0, [])
  return resArr
}
