function canJump(nums: number[]): boolean {
  let cur: number = 0
  // 跳跃的范围
  let farthIndex: number = 0
  while (cur <= farthIndex) {
    farthIndex = Math.max(farthIndex, cur + nums[cur])
    if (farthIndex >= nums.length - 1) return true
    cur++
  }
  return false
}
