function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  // 注意这里的等于号不能少
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      right = mid - 1 // 去左面闭区间寻找
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid // 去右面闭区间寻找
    }
  }
  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))

export {}
