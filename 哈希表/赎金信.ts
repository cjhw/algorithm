function canConstruct(ransomNote: string, magazine: string): boolean {
  const helpArr: number[] = new Array(26).fill(0)
  let base = 'a'.charCodeAt(0)
  let index: number
  for (let i = 0; i < magazine.length; i++) {
    helpArr[magazine[i].charCodeAt(0) - base]++
  }
  for (let i = 0; i < ransomNote.length; i++) {
    index = ransomNote[i].charCodeAt(0) - base
    helpArr[index]--
    if (helpArr[index] < 0) {
      return false
    }
  }
  return true
}
