// 单调栈

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: { [x: number]: number } = {}
  const stack: number[] = []
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i]
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop()
    }
    map[num] = stack.length ? stack[stack.length - 1] : -1
    stack.push(num)
  }
  const res = nums1.map((n) => map[n])
  return res
}
