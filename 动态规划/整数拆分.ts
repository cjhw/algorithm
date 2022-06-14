function integerBreak(n: number): number {
  let dp: number[] = new Array(n + 1).fill(0)
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      //j*(i-j)表示把i拆分为j和i-j两个数相乘
      //j*dp[i-j]表示把i拆分成j和继续把(i-j)这个数拆分，取(i-j)拆分结果中的最大乘积与j相乘

      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
    }
  }
  return dp[n]
}

integerBreak(10)
