// 滑动窗口，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果
// function minSubArrayLen(target: number, nums: number[]): number {
//   let len = nums.length
//   let left = 0
//   let right = 0
//   let res = len + 1
//   let sum = 0
//   while (right <= len) {
//     sum += nums[right]
//     if (sum >= target) {
//       while (sum - nums[left] >= target) {
//         // 不断移动左指针，直到不能再缩小为止
//         sum -= nums[left++]
//       }
//       res = Math.min(res, right - left + 1)
//     }
//     right++
//   }
//   return res > len ? 0 : res
// }

function minSubArrayLen(target: number, nums: number[]): number {
  let len = nums.length
  let slow = 0
  let fast = 0
  let result = len + 1
  let sum = 0
  while (fast < len) {
    sum += nums[fast++]
    while (sum >= target) {
      let subLen = fast - slow
      result = result < subLen ? result : subLen
      sum -= nums[slow++]
    }
  }
  return result > len ? 0 : result
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
