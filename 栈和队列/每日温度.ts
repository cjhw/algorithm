// 单调栈

function dailyTemperatures(temperatures: number[]): number[] {
  let n = temperatures.length
  let res = new Array(n).fill(0)
  let stack: number[] = []
  stack.push(0)
  for (let i = 1; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const top = stack.pop()!
      res[top] = i - top
    }
    stack.push(i)
  }
  return res
}
