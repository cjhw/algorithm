interface Amap {
  [key: string]: number
}

function twoSum(nums: number[], target: number): number[] {
  const map: Amap = {}
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i]
    if (map[rest] !== undefined) {
      return [map[rest], i]
    }
    map[nums[i]] = i
  }
  return []
}

export {}
