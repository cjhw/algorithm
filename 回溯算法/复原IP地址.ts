function isValidIpSegment(str: string): boolean {
  let resBool: boolean = true
  let tempVal: number = Number(str)
  if (
    str.length === 0 ||
    isNaN(tempVal) ||
    tempVal > 255 ||
    tempVal < 0 ||
    (str.length > 1 && str[0] === '0')
  ) {
    resBool = false
  }
  return resBool
}

function restoreIpAddresses(s: string): string[] {
  const resArr: string[] = []
  backTracking(s, 0, [])
  return resArr
  function backTracking(s: string, startIndex: number, route: string[]) {
    let length: number = s.length
    if (route.length === 4 && startIndex >= length) {
      resArr.push(route.join('.'))
      return
    }
    if (route.length === 4 || startIndex >= length) return
    let tempStr: string = ''
    for (let i = startIndex + 1; i <= Math.min(length, startIndex + 3); i++) {
      tempStr = s.slice(startIndex, i)
      if (isValidIpSegment(tempStr)) {
        route.push(tempStr)
        backTracking(s, i, route)
        route.pop()
      }
    }
  }
}
