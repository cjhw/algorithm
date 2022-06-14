function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const helpArr = new Array(26).fill(0)
  let pivot: number = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    helpArr[s.charCodeAt(i) - pivot]++
    helpArr[t.charCodeAt(i) - pivot]--
  }
  return helpArr.every((i) => i === 0)
}
