function removeElement(nums: number[], val: number): number {
  let slow: number = 0
  let fast: number = 0
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return slow
}
