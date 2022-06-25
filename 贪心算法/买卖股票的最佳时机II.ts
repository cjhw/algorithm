function maxProfit(prices: number[]): number {
  let resProfit: number = 0
  for (let i = 1; i < prices.length; i++) {
    resProfit += Math.max(prices[i] - prices[i - 1], 0)
  }
  return resProfit
}

export {}
