function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)
  let first: number = 0,
    second: number,
    third: number,
    fourth: number
  let len = nums.length
  const res: number[][] = []
  for (; first < len; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    for (second = first + 1; second < len; second++) {
      if (second - first > 1 && nums[second] === nums[second - 1]) {
        continue
      }
      third = second + 1
      fourth = len - 1
      while (third < fourth) {
        let total: number =
          nums[first] + nums[second] + nums[third] + nums[fourth]
        if (total === target) {
          res.push([nums[first], nums[second], nums[third], nums[fourth]])
          third++
          fourth--
          while (nums[third] === nums[third - 1]) third++
          while (nums[fourth] === nums[fourth + 1]) fourth--
        } else if (total < target) {
          third++
        } else {
          fourth--
        }
      }
    }
  }
  return res
}

export {}
