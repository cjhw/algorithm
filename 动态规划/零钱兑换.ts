function coinChange(coins: number[], amount: number): number {
  if (!amount) {
    return 0
  }
  let dp: number[] = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < coins.length; i++) {
    // 针对每一种硬币操作
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
