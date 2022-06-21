function predictPartyVictory(senate: string): string {
  let queue = senate.split('')
  let stack = []
  while (queue[0]) {
    let s = queue.shift()
    if (stack.length === 0 || stack[stack.length - 1] === s) {
      stack.push(s)
    } else {
      queue.push(stack.pop()!)
    }
  }
  return stack.pop() === 'R' ? 'Radiant' : 'Dire'
}

predictPartyVictory('RDD')
