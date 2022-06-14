function evalRPN(tokens: string[]): number {
  const helpStack: number[] = []
  let temp: number
  let i: number = 0
  while (i < tokens.length) {
    let t: string = tokens[i]
    switch (t) {
      case '+':
        temp = helpStack.pop()! + helpStack.pop()!
        helpStack.push(temp)
        break
      case '-':
        temp = helpStack.pop()!
        temp = helpStack.pop()! - temp
        helpStack.push(temp)
        break
      case '*':
        temp = helpStack.pop()! * helpStack.pop()!
        helpStack.push(temp)
        break
      case '/':
        temp = helpStack.pop()!
        temp = Math.trunc(helpStack.pop()! / temp)
        helpStack.push(temp)
        break
      default:
        helpStack.push(Number(t))
        break
    }
    i++
  }
  return helpStack.pop()!
}
