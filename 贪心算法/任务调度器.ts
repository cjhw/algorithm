function leastInterval(tasks: string[], n: number): number {
  let arr = new Array(26).fill(0)
  for (let t of tasks) {
    arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++
  }
  let max = Math.max(...arr)
  let res = (max - 1) * (n + 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      res++
    }
  }
  return Math.max(res, tasks.length)
}
