function lengthOfLIS(nums: number[]): number {
  // dp[]是在n位置以前的位置，最长递增子序列的长度
  let len: number = nums.length
  if (len === 0) {
    return 0
  }
  let dp: number[] = Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

// 还有贪心的做法
export {}
