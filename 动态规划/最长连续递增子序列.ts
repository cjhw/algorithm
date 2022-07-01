function findLengthOfLCIS(nums: number[]): number {
  let dp = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      dp[i + 1] = dp[i] + 1
    }
  }
  return Math.max(...dp)
}
