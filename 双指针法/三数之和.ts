function threeSum(nums: number[]): number[][] {
  let length = nums.length
  const resArr: number[][] = []
  if (nums === null && length < 3) return resArr
  nums.sort((a, b) => a - b)
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = length - 1
    while (left < right) {
      let total = nums[i] + nums[left] + nums[right]
      if (total === 0) {
        resArr.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (total < 0) left++
      else if (total > 0) right--
    }
  }
  return resArr
}

export {}
