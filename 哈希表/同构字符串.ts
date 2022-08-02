function isIsomorphic(s: string, t: string): boolean {
  const helperMap1: Map<string, string> = new Map()
  const helperMap2: Map<string, string> = new Map()
  let length = s.length
  for (let i = 0; i < length; i++) {
    let temp1: string | undefined = helperMap1.get(s[i])
    let temp2: string | undefined = helperMap2.get(t[i])
    if (temp1 === undefined && temp2 === undefined) {
      helperMap1.set(s[i], t[i])
      helperMap2.set(t[i], s[i])
    } else if (temp1 !== t[i] || temp2 !== s[i]) {
      return false
    }
  }
  return true
}
