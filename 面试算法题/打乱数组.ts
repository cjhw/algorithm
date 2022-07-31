class Solution {
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }

  reset(): number[] {
    return this.nums
  }

  shuffle(): number[] {
    let arr = [...this.nums]
    for (let i = arr.length - 1; i >= 0; i--) {
      const ri = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[ri]] = [arr[ri], arr[i]]
    }
    return arr
  }
}
