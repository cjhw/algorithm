function maxSubArray(nums: number[]): number {
  let curSum: number = 0
  let resMax: number = -Infinity
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i]
    resMax = Math.max(resMax, curSum)
    if (curSum < 0) curSum = 0
  }
  return resMax
}
