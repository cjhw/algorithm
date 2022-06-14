function isValid(s: string): boolean {
  type BracketMap = {
    [index: string]: string
  }
  let helperStack: string[] = []
  let bracketMap: BracketMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (let i of s) {
    if (bracketMap.hasOwnProperty(i)) {
      helperStack.push(bracketMap[i])
    } else if (i !== helperStack.pop()) {
      return false
    }
  }
  return helperStack.length === 0
}
