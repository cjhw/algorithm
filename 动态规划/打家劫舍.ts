function rob(nums: number[]): number {
  // 递推公式
  // dp[i] i之前的房屋，最多可以偷取dp[i]的钱
  let dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[nums.length - 1]
}
