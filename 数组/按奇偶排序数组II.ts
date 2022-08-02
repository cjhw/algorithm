function sortArrayByParityII(nums: number[]): number[] {
  const length = nums.length
  const resArr = []
  let evenIndex = 0
  let oddIndex = 1
  for (let i = 0; i < length; i++) {
    if (nums[i] % 2 === 0) {
      resArr[evenIndex] = nums[i]
      evenIndex += 2
    } else {
      resArr[oddIndex] = nums[i]
      oddIndex += 2
    }
  }
  return resArr
}
