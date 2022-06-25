function maxProfit(prices: number[]): number {
  let low = Infinity
  let res = 0
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i])
    res = Math.max(res, prices[i] - low)
  }
  return res
}

export {}
