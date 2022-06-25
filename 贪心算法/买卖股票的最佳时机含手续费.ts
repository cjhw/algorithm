function maxProfit(prices: number[], fee: number): number {
  let result: number = 0
  let minPrice: number = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
    if (prices[i] >= minPrice && prices[i] <= minPrice + fee) {
      continue
    }
    if (prices[i] > minPrice + fee) {
      result += prices[i] - minPrice - fee
      minPrice = prices[i] - fee
    }
  }
  return result
}

export {}
