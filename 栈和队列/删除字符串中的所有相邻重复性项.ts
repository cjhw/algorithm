function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    const pre = stack.pop()
    if (pre) {
      if (s[i] === pre) continue
      else {
        stack.push(pre)
        stack.push(s[i])
      }
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
}
