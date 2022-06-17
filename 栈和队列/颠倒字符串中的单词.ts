function reverseWords(s: string): string {
  let left = 0
  let right = s.length - 1
  let queue = []
  let word = ''
  while (s.charAt(left) === ' ') {
    left++
  }
  while (s.charAt(right) === ' ') {
    right--
  }
  while (left < right) {
    let ch = s.charAt(left)
    if (ch === ' ' && word) {
      queue.unshift(word)
      word = ''
    } else if (ch !== ' ') {
      word += ch
    }
    left++
  }
  queue.unshift(word)
  return queue.join(' ')
}
