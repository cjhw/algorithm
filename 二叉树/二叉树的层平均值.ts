function averageOfLevels(root: TreeNode | null): number[] {
  let res: number[] = []
  if (root === null) {
    return res
  }
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let originLen = len
    let sum = 0
    while (len--) {
      let node = queue.shift()
      sum += node!.val
      node?.left && queue.push(node.left)
      node?.right && queue.push(node.right)
    }
    res.push(sum / originLen)
  }
  return res
}
