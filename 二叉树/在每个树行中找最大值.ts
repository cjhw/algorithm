function largestValues(root: TreeNode | null): number[] {
  let res: number[] = []
  if (root === null) {
    return res
  }
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let maxVal = queue[0].val
    while (len--) {
      let node = queue.shift()
      maxVal = maxVal > node!.val ? maxVal : node!.val
      node?.left && queue.push(node.left)
      node?.right && queue.push(node.right)
    }
    res.push(maxVal)
  }
  return res
}
