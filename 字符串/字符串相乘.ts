function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0'
  const arr: number[] = []
  let l1: number = num1.length - 1
  let l2: number = num2.length - 1
  for (let i = l1; i >= 0; i--) {
    for (let j = l2; j >= 0; j--) {
      arr[i + j] = (arr[i + j] || 0) + Number(num1[i]) * Number(num2[j])
    }
  }
  let carry: number = 0
  let i: number = arr.length - 1
  while (i >= 0) {
    let cur = carry + arr[i]
    arr[i] = cur % 10
    carry = Math.floor(cur / 10)
    i--
  }
  if (carry) {
    arr.unshift(carry)
  }
  return arr.join('')
}
