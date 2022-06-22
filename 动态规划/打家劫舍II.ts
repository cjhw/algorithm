function rob(nums: number[]): number {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return nums[0]
  }
  const res1 = robRange(nums, 0, len - 2)
  const res2 = robRange(nums, 1, len - 1)
  return Math.max(res1, res2)
}

function robRange(nums: number[], start: number, end: number): number {
  if (start === end) {
    return nums[start]
  }
  const dp = new Array(nums.length).fill(0)
  dp[start] = nums[start]
  dp[start + 1] = Math.max(nums[start], nums[start + 1])
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[end]
}
