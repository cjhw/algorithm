function lengthOfLIS(nums: number[]): number {
  // 让子序列尽可能增长的慢
  // 例如[1,3,5]就比[1,4,5]好
  let len: number = nums.length
  if (len === 0) {
    return 0
  }
  let arr: number[] = [nums[0]]
  for (let i = 0; i < len; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i])
    } else {
      let left = 0
      let right = arr.length - 1
      while (left < right) {
        let mid = (right - left) >> 1
        if (arr[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      arr[left] = nums[i]
    }
  }
  return arr.length
}
