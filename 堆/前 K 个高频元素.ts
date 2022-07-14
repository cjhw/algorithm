function topKFrequent(nums: number[], k: number): any[] {
  let map: { [x: string]: number } = {}
  nums.map((num) => {
    if (num in map) {
      map[num] += 1
    } else {
      map[num] = 1
    }
  })

  return Object.keys(map)
    .sort((a: string, b: string) => map[b] - map[a])
    .slice(0, k)
}

console.log(topKFrequent([1, 2, 1, 2, 3], 2))
