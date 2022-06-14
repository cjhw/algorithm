function lemonadeChange(bills: number[]): boolean {
  let five: number = 0
  let ten: number = 0
  for (let bill of bills) {
    switch (bill) {
      case 5:
        five++
        break
      case 10:
        if (five < 1) return false
        five--
        ten++
        break
      case 20:
        if (ten > 0 && five > 0) {
          ten--
          five--
        } else if (five > 2) {
          five -= 3
        } else {
          return false
        }
        break
      default:
        break
    }
  }
  return true
}
