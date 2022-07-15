function nextGreaterElements(nums: number[]): number[] {
  let len = nums.length
  let stack: number[] = []
  let res = new Array(len).fill(-1)
  for (let i = 0; i < len * 2; i++) {
    let num = nums[i % len]
    while (stack.length && num > nums[stack[stack.length - 1]]) {
      const index = stack.pop()!
      res[index] = num
    }
    stack.push(i % len)
  }
  return res
}
