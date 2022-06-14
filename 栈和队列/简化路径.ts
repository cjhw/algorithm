function simplifyPath(path: string): string {
  let stack: string[] = []
  let paths: string[] = path.split('/')
  for (let p of paths) {
    if (p === '..') {
      stack.pop()
    } else if (p && p !== '.') {
      stack.push(p)
    } else {
      // p为""什么也不用干可以删掉
    }
  }
  return '/' + stack.join('/')
}
