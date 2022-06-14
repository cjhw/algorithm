let s = 'hello'
console.log(s.padStart(10, '0'))

function leftpad(str, length, ch) {
  let len = length - str.length + 1
  return new Array(len).join(ch) + str
}

console.log(leftpad('hello', 10, '0'))

// 二分法优化
function leftpad2(str, length, ch) {
  let len = length - str.length
  total = ''
  while (true) {
    // if(len%2===1)
    if (len & 1) {
      total += ch
    }
    if (len === 1) {
      return total + str
    }
    ch += ch
    len = len >> 1
  }
}

console.log(leftpad2('hello', 10, '0'))
