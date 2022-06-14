function levelOrderBottom(root: TreeNode | null): number[][] {
  let res: number[][] = []
  if (root === null) {
    return res
  }
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let temp: number[] = []
    while (len > 0) {
      let cur = queue.shift()
      temp.push(cur!.val)
      cur?.left && queue.push(cur.left)
      cur?.right && queue.push(cur.right)
      len--
    }
    res.unshift(temp)
  }
  return res
}
