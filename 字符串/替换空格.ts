function replaceSpace(s: string): string {
  const arr: string[] = s.split('')
  let spacenum: number = 0
  let oldLength: number = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      spacenum++
    }
  }
  arr.length = oldLength + 2 * spacenum
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

export {}
