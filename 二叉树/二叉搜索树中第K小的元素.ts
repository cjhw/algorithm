function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()!
    count++
    if (count === k) {
      return root.val
    }
    root = root.right
  }
  return 0
}
