const { Heap } = require('./设计堆')

function topKFrequent(nums, k) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1
    } else {
      map[nums[i]] = 1
    }
  }
  let heap = new Heap((a, b) => map[a] < map[b])
  Object.keys(map).forEach((n, i) => {
    if (i < k) {
      heap.push(n)
    } else if (map[heap.peek()] < map[n]) {
      heap.arr[1] = n
      heap.sinkDown(1)
    }
  })
  return heap.arr.slice(1)
}

console.log(topKFrequent([1, 2, 1, 2, 3], 2))
