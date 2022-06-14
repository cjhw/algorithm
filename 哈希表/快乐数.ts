function isHappy(n: number): boolean {
  function calcnum(val: number): number {
    return String(val)
      .split('')
      .reduce((pre, cur) => pre + Number(cur) * Number(cur), 0)
  }
  const strset: Set<number> = new Set()
  while (n !== 1 && !strset.has(n)) {
    strset.add(n)
    n = calcnum(n)
  }
  return n === 1
}
