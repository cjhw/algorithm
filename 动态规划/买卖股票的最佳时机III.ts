// function maxProfit(prices: number[]): number {
//   let len = prices.length
//   let dp = new Array(len).fill(0).map((x) => {
//     return new Array(5).fill(0)
//   })
//   // 最多两次交易
//   // dp[i][1] 第i天，你买入股票的状态
//   // dp[i][2] 卖出
//   // dp[i][3] 第二次买入
//   // dp[i][4] 第二次卖出
//   dp[0][1] = -prices[0]
//   dp[0][3] = -prices[0]
//   for (let i = 1; i < len; i++) {
//     dp[i][0] = dp[i - 1][0]
//     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
//     dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
//     dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
//     dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
//   }
//   return dp[len - 1][4]
// }

function maxProfit(prices: number[]): number {
  let len = prices.length
  let dp = [0, 0, 0, 0, 0]
  dp[1] = -prices[0]
  dp[3] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[1] = Math.max(dp[1], dp[0] - prices[i])
    dp[2] = Math.max(dp[2], dp[1] + prices[i])
    dp[3] = Math.max(dp[3], dp[2] - prices[i])
    dp[4] = Math.max(dp[4], dp[3] + prices[i])
  }
  return dp[4]
}
