function replaceSpace(s: string): string {
  const arr: string[] = s.split('')
  let spacenum: number = 0
  let oldLength = arr.length
  for (let i = 0; i < oldLength; i++) {
    if (arr[i] === ' ') {
      spacenum++
    }
  }
  arr.length = oldLength + spacenum * 2
  let cur: number = oldLength - 1
  for (let i = arr.length - 1; i >= 0; i--, cur--) {
    if (arr[cur] !== ' ') {
      arr[i] = arr[cur]
    } else {
      arr[i] = '0'
      arr[--i] = '2'
      arr[--i] = '%'
    }
  }
  return arr.join('')
}
