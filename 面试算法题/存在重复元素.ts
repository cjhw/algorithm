function containsDuplicate(nums: number[]): boolean {
  // es6
  // return new Set(nums).size !== nums.length
  // let obj: { [key: number]: boolean } = {} //O(n)的空间复杂度
  // for (let num of nums) {
  //   if (num in obj) {
  //     return true
  //   }
  //   obj[num] = true
  // }
  // return false
  // 时间换空间
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
}
