function intersection(nums1: number[], nums2: number[]): number[] {
  const reset: Set<number> = new Set()
  const num1set: Set<number> = new Set(nums1)
  for (let i of nums2) {
    if (num1set.has(i)) {
      reset.add(i)
    }
  }
  return Array.from(reset)
}
