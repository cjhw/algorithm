function addStrings(num1: string, num2: string): string {
  let res: string = ''
  let flag: number = 0
  while (num1.length < num2.length) {
    num1 = '0' + num1
  }
  while (num1.length > num2.length) {
    num2 = '0' + num2
  }
  let i = num1.length - 1
  while (i >= 0) {
    flag = Number(num1[i]) + Number(num2[i]) + flag
    res = (flag % 10) + res
    flag = flag >= 10 ? 1 : 0
    i--
  }
  return flag === 1 ? '1' + res : res
}
