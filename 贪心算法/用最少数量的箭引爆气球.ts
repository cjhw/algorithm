// function findMinArrowShots(points: number[][]): number {
//   if (!points.length) {
//     return 0
//   }
//   points.sort((a, b) => a[1] - b[1])
//   let pos = points[0][1]
//   let res = 1
//   for (let balloon of points) {
//     if (pos < balloon[0]) {
//       pos = balloon[1]
//       res++
//     }
//   }
//   return res
// }

function findMinArrowShots(points: number[][]): number {
  if (!points.length) {
    return 0
  }
  points.sort((a, b) => a[0] - b[0])
  let result = 1
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      result++
    } else {
      points[i][1] = Math.max(points[i - 1][1], points[i][1])
    }
  }
  return result
}
