// function subsets(nums: number[]): number[][] {
//   const resArr: number[][] = []
//   backTracking(nums, 0, [])
//   return resArr
//   function backTracking(nums: number[], startIndex: number, route: number[]) {
//     resArr.push([...route])
//     let length = nums.length
//     if (startIndex === length) return
//     for (let i = startIndex; i < length; i++) {
//       route.push(nums[i])
//       backTracking(nums, i + 1, route)
//       route.pop()
//     }
//   }
// }

function subsets(nums: number[]): number[][] {
  let res: number[][] = []
  let path: number[] = []
  backTracking(0)
  return res
  function backTracking(i: number) {
    res.push([...path])
    let len = nums.length
    for (let j = i; j < len; j++) {
      path.push(nums[j])
      backTracking(j + 1)
      path.pop()
    }
  }
}
