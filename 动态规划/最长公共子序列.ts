function longestCommonSubsequence(text1: string, text2: string): number {
  // dp[i][j] text1的i之前和text2的j之前的字符串的最长公共子序列长度
  let dp = new Array(text1.length + 1).fill(0).map((i) => {
    return new Array(text2.length + 1).fill(0)
  })
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[text1.length][text2.length]
}
