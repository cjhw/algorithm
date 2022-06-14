function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const resArr: number[][] = []
  backTracking(nums, 0, [])
  return resArr
  function backTracking(nums: number[], startIndex: number, route: number[]) {
    resArr.push([...route])
    let length = nums.length
    for (let i = startIndex; i < length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) continue
      route.push(nums[i])
      backTracking(nums, i + 1, route)
      route.pop()
    }
  }
}
