function findMinArrowShots(points: number[][]): number {
  if (!points.length) {
    return 0
  }
  points.sort((a, b) => a[1] - b[1])
  let pos = points[0][1]
  let res = 1
  for (let balloon of points) {
    if (pos < balloon[0]) {
      pos = balloon[1]
      res++
    }
  }
  return res
}
