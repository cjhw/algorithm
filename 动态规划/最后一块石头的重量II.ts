function lastStoneWeightII(stones: number[]): number {
  let sum: number = stones.reduce((s, n) => s + n)
  let dpLen: number = Math.floor(sum / 2)
  const dp = new Array(dpLen + 1).fill(0)
  for (let i = 0; i < stones.length; i++) {
    for (let j = dpLen; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return sum - dp[dpLen] - dp[dpLen]
}

lastStoneWeightII([2, 7, 4, 1, 8, 1])
