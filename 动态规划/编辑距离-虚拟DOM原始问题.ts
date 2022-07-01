// 两个字符串删除距离
function minDistance(word1: string, word2: string): number {
  // dp[i][j] word1的slice(0,i) word2.slice(0,j)相互删除字符达到相同所需要的步数
  // word[i-1][j-1]
  // 相同
  // dp[i - 1][j - 1]
  // 不相同
  // dp[i-1][j]
  // dp[i][j-1]
  // dp[i-1][j-1]
  // 取最小值
  let dp = new Array(word1.length + 1).fill(0).map((i) => {
    return new Array(word2.length + 1).fill(0)
  })
  // word1 "" word2是任意字符串，都是删除任意字符得到
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        )
      }
    }
  }
  return dp[word1.length][word2.length]
}

export {}
