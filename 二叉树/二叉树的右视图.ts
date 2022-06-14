function rightSideView(root: TreeNode | null): number[] {
  let res: number[] = []
  if (root === null) {
    return res
  }
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len--) {
      let cur = queue.shift()
      if (len === 0) {
        res.push(cur!.val)
      }
      cur?.left && queue.push(cur.left)
      cur?.right && queue.push(cur.right)
    }
  }
  return res
}
