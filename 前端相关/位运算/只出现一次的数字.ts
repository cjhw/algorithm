function singleNumber(nums: number[]): number {
  let res: number = 0
  nums.forEach((num) => {
    res ^= num
  })
  return res
}
