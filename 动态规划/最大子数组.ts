function maxSubArray(nums: number[]): number {
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    res = Math.max(dp[i], res)
  }
  return res
}
