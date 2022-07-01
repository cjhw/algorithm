// function isHappy(n: number): boolean {
//   function calcnum(val: number): number {
//     return String(val)
//       .split('')
//       .reduce((pre, cur) => pre + Number(cur) * Number(cur), 0)
//   }
//   const strset: Set<number> = new Set()
//   while (n !== 1 && !strset.has(n)) {
//     strset.add(n)
//     n = calcnum(n)
//   }
//   return n === 1
// }

// function isHappy(n: number): boolean {
//   let obj: { [key: string]: boolean } = {}
//   function getNum(n: number): number {
//     let sum = 0
//     while (n) {
//       sum += (n % 10) ** 2
//       n = Math.floor(n / 10)
//     }
//     return sum
//   }
//   while (true) {
//     if (n in obj) {
//       return false
//     }
//     if (n === 1) {
//       return true
//     }
//     obj[n] = true
//     n = getNum(n)
//   }
// }

// 环形链表 如果没环一定能跑完
function isHappy(n: number): boolean {
  function getNum(n: number): number {
    let sum = 0
    while (n) {
      sum += (n % 10) ** 2
      n = Math.floor(n / 10)
    }
    return sum
  }
  let slow = n
  let fast = n
  if (n === 1) {
    return true
  }
  while (fast !== 1 && getNum(fast) !== 1) {
    slow = getNum(slow)
    fast = getNum(getNum(fast))
    if (slow === fast) {
      return false
    }
  }
  return true
}
