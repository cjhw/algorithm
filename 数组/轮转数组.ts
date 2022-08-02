function rotate(nums: number[], k: number): void {
  const length = nums.length
  k %= length
  reverse(nums, 0, length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, length - 1)
}

function reverse(nums: number[], left: number, right: number) {
  while (left < right) {
    const temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }
}
