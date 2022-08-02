function uniqueOccurrences(arr: number[]): boolean {
  const countMap: Map<number, number> = new Map()
  arr.forEach((val) => {
    countMap.set(val, (countMap.get(val) || 0) + 1)
  })
  return countMap.size === new Set(countMap.values()).size
}
