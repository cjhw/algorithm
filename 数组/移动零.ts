function moveZeroes(nums: number[]): void {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast]) {
      ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
}
