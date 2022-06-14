function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const helperMap = new Map<number, number>()
  let res: number = 0
  let temp: number | undefined
  for (let i of nums1) {
    for (let j of nums2) {
      temp = helperMap.get(i + j)
      helperMap.set(i + j, temp ? temp + 1 : 1)
    }
  }
  for (let k of nums3) {
    for (let l of nums4) {
      temp = helperMap.get(0 - (k + l))
      if (temp) {
        res += temp
      }
    }
  }
  return res
}
