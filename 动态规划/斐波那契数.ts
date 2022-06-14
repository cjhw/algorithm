// function fib(n: number): number {
//   let dp = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   return dp[n]
// }
// 动态规划空间复杂度优化
function fib(n: number): number {
  if (n <= 1) {
    return n
  }
  let dp1 = 0
  let dp2 = 1
  let dp3: number = 0
  for (let i = 2; i <= n; i++) {
    dp3 = dp1 + dp2
    dp1 = dp2
    dp2 = dp3
  }
  return dp3
}

// 复杂度太高
// function fib(n: number): number {
//   if (n <= 1) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2)
// }

// 优化 带备忘录
// function fib(n: number): number {
//   let memo: number[] = []
//   return helper(memo, n)
//   function helper(memo: number[], n: number): number {
//     if (n <= 1) {
//       return n
//     }
//     if (memo[n]) {
//       return memo[n]
//     }
//     memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
//     return memo[n]
//   }
// }
