// function combinationSum(candidates: number[], target: number): number[][] {
//   const resArr: number[][] = []
//   function backTracking(
//     candidates: number[],
//     target: number,
//     startIndex: number,
//     route: number[],
//     curSum: number
//   ) {
//     if (curSum > target) return
//     if (curSum === target) {
//       resArr.push([...route])
//       return
//     }
//     for (let i = startIndex, length = candidates.length; i < length; i++) {
//       let tempVal: number = candidates[i]
//       route.push(tempVal)
//       backTracking(candidates, target, i, route, curSum + tempVal)
//       route.pop()
//     }
//   }
//   backTracking(candidates, target, 0, [], 0)
//   return resArr
// }

function combinationSum(candidates: number[], target: number): number[][] {
  let res: number[][] = []
  let path: number[] = []
  candidates.sort()
  function backTracking(i: number, sum: number) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push([...path])
    }
    for (let j = i; j < candidates.length; j++) {
      let num = candidates[j]
      if (num + sum > target) {
        continue
      }
      path.push(num)
      sum += num
      backTracking(j, sum)
      path.pop()
      sum -= num
    }
  }
  backTracking(0, 0)
  return res
}
