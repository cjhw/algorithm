// function permuteUnique(nums: number[]): number[][] {
//   nums.sort((a, b) => a - b)
//   const resArr: number[][] = []
//   const usedArr: boolean[] = new Array(nums.length).fill(false)
//   backTracking(nums, [])
//   return resArr
//   function backTracking(nums: number[], route: number[]) {
//     if (route.length === nums.length) {
//       resArr.push([...route])
//       return
//     }
//     for (let i = 0, length = nums.length; i < length; i++) {
//       if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1] === false) continue
//       if (usedArr[i] === false) {
//         route.push(nums[i])
//         usedArr[i] = true
//         backTracking(nums, route)
//         route.pop()
//         usedArr[i] = false
//       }
//     }
//   }
// }

function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  let res: number[][] = []
  let path: number[] = []
  backTracking([])
  return res
  function backTracking(used: boolean[]) {
    if (path.length === nums.length) {
      res.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i]
      // 前一个和这个一样并且没用过跳过循环
      if (nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      if (!used[i]) {
        used[i] = true
        path.push(num)
        backTracking(used)
        path.pop()
        used[i] = false
      }
    }
  }
}
