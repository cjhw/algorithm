function isSubsequence(s: string, t: string): boolean {
  // dp[i][j] 下标i结尾的字符串，和下标j结尾的字符串，相同子序列的长度
  let m = s.length
  let n = t.length
  let dp = new Array(m + 1).fill(0).map((i) => {
    return new Array(n + 1).fill(0)
  })
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  return dp[m][n] === m
}

export {}
