function permute(nums: number[]): number[][] {
  const resArr: number[][] = []
  const helpSet: Set<number> = new Set()
  backTracking(nums, [])
  return resArr
  function backTracking(nums: number[], route: number[]) {
    if (route.length === nums.length) {
      resArr.push([...route])
      return
    }
    let tempVal: number
    for (let i = 0, length = nums.length; i < length; i++) {
      tempVal = nums[i]
      if (!helpSet.has(tempVal)) {
        route.push(tempVal)
        helpSet.add(tempVal)
        backTracking(nums, route)
        route.pop()
        helpSet.delete(tempVal)
      }
    }
  }
}
