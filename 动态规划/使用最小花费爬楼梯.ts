// function minCostClimbingStairs(cost: number[]): number {
//   const dp: number[] = [cost[0], cost[1]]
//   for (let i = 2; i < cost.length; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
//   }
//   return Math.min(dp[cost.length - 1], dp[cost.length - 2])
// }

// dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]) 递推公式

function minCostClimbingStairs(cost: number[]): number {
  let dp: number[] = [cost[0], cost[1]]
  for (let i = 0; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i] + dp[i - 2] + cost[i])
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
}
