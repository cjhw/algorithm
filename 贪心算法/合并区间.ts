function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  let result: number[][] = []
  for (let i = 0; i < intervals.length; i++) {
    let cur = intervals[i]
    if (prev[1] < cur[0]) {
      result.push(prev)
      prev = cur
    } else {
      prev[1] = Math.max(prev[1], cur[1])
    }
  }
  result.push(prev)
  return result
}
