function searchInsert(nums: number[], target: number): number {
  const length = nums.length
  let left = 0
  let right = length - 1
  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return right + 1
}
