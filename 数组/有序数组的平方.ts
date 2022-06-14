// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// function sortedSquares(nums: number[]): number[] {
//   let n = nums.length
//   let i = 0
//   let j = n - 1
//   let k = n - 1
//   const res = new Array(n).fill(0)
//   while (i <= j) {
//     let left = nums[i] * nums[i]
//     let right = nums[j] * nums[j]
//     if (left <= right) {
//       res[k--] = right
//       j--
//     } else {
//       res[k--] = left
//       i++
//     }
//   }
//   return res
// }

function sortedSquares(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1
  const res: number[] = Array(nums.length)
  let k = right
  while (left <= right) {
    let l = nums[left] * nums[left]
    let r = nums[right] * nums[right]
    if (l < r) {
      res[k] = r
      right--
    } else {
      res[k] = l
      left++
    }
    k--
  }
  return res
}
console.log(sortedSquares([-7, -3, 2, 3, 11]))
