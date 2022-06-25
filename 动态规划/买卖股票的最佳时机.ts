function maxProfit(prices: number[]): number {
  // dp[i]=[持有股票所得最多的现金，不持有股票所得最多的现金]
  let dp = new Array(prices.length).fill(0)
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ]
  }
  return dp[prices.length - 1][1]
}

export {}
