function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1])
  let count = 1
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i]
    if (interval[0] > end) {
      end = interval[1]
      count++
    }
  }
  return intervals.length - count
}
