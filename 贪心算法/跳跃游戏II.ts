// function jump(nums: number[]): number {
//   const length: number = nums.length
//   let curFarthIndex: number = 0
//   let nextFarthIndex: number = 0
//   let stepNum: number = 0
//   let curIndex: number = 0
//   while (curIndex < length - 1) {
//     nextFarthIndex = Math.max(nextFarthIndex, curIndex + nums[curIndex])
//     if (curIndex === curFarthIndex) {
//       curFarthIndex = nextFarthIndex
//       stepNum++
//     }
//     curIndex++
//   }
//   return stepNum
// }

function jump(nums: number[]): number {
  let curIndex = 0
  let nextIndex = 0
  let step = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex)
    if (i === curIndex) {
      curIndex = nextIndex
      step++
    }
  }
  return step
}

jump([2, 3, 0, 1, 4])
