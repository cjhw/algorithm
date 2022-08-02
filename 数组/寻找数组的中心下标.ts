function pivotIndex(nums: number[]): number {
  const length = nums.length
  const sum = nums.reduce((a, b) => a + b)
  let leftSum = 0
  for (let i = 0; i < length; i++) {
    const rightSum = sum - leftSum - nums[i]
    if (leftSum === rightSum) return i
    leftSum += nums[i]
  }
  return -1
}
