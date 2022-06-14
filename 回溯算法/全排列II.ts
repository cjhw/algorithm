function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const resArr: number[][] = []
  const usedArr: boolean[] = new Array(nums.length).fill(false)
  backTracking(nums, [])
  return resArr
  function backTracking(nums: number[], route: number[]) {
    if (route.length === nums.length) {
      resArr.push([...route])
      return
    }
    for (let i = 0, length = nums.length; i < length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1] === false) continue
      if (usedArr[i] === false) {
        route.push(nums[i])
        usedArr[i] = true
        backTracking(nums, route)
        route.pop()
        usedArr[i] = false
      }
    }
  }
}
