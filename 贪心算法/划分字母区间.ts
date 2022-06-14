function partitionLabels(s: string): number[] {
  const hash: { [key: string]: number } = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i
  }
  let left = 0
  let right = 0
  let result: number[] = []
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]])
    if (right === i) {
      result.push(right - left + 1)
      left = i + 1
    }
  }
  return result
}
