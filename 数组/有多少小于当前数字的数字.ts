function smallerNumbersThanCurrent(nums: number[]): number[] {
  // 暴力
  // let resArr = []
  // let count = 0
  // for (let i = 0; i < nums.length; i++) {
  //   let cur = nums[i]
  //   for (let j = 0; j < nums.length; j++) {
  //     if (cur > nums[j]) {
  //       count++
  //     }
  //   }
  //   resArr.push(count)
  //   count = 0
  // }
  // return resArr
  // 排序加hash
  const length: number = nums.length
  const sortArr: number[] = [...nums]
  sortArr.sort((a, b) => a - b)
  const hashMap: Map<number, number> = new Map()
  for (let i = length - 1; i >= 0; i--) {
    hashMap.set(sortArr[i], i)
  }
  const resArr: number[] = []
  for (let i = 0; i < length; i++) {
    resArr[i] = hashMap.get(nums[i])!
  }
  return resArr
}
