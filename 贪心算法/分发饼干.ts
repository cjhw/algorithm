function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const childLength: number = g.length
  const cookieLength: number = s.length
  let curChild: number = childLength - 1
  let curCookie: number = cookieLength - 1
  let resCount: number = 0
  while (curChild >= 0 && curCookie >= 0) {
    if (g[curChild] <= s[curCookie]) {
      curCookie--
      resCount++
    }
    curChild--
  }
  return resCount
}
