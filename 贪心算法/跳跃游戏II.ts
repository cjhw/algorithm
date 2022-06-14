function jump(nums: number[]): number {
  const length: number = nums.length
  let curFarthIndex: number = 0
  let nextFarthIndex: number = 0
  let stepNum: number = 0
  let curIndex: number = 0
  while (curIndex < length - 1) {
    nextFarthIndex = Math.max(nextFarthIndex, curIndex + nums[curIndex])
    if (curIndex === curFarthIndex) {
      curFarthIndex = nextFarthIndex
      stepNum++
    }
    curIndex++
  }
  return stepNum
}
