function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = left + ((right - left) >> 2)
    if (nums[mid] < nums[right]) {
      right = mid
    } else if (nums[mid] > nums[right]) {
      left = mid + 1
    }
  }
  return nums[left]
}
