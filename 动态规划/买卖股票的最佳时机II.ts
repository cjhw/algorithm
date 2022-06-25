function maxProfit(prices: number[]): number {
  let len = prices.length
  let has = -prices[0]
  let noHas = 0
  for (let i = 1; i < len; i++) {
    has = Math.max(has, noHas - prices[i])
    noHas = Math.max(noHas, has + prices[i])
  }
  return noHas
}

export {}
