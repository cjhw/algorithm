function findBottomLeftValue(root: TreeNode | null): number {
  function rescur(root: TreeNode, depth: number) {
    if (root.left === null && root.right === null) {
      if (depth > maxDepth) {
        maxDepth = depth
        result = root.val
      }
    }
    if (root.left) {
      rescur(root.left, depth + 1)
    }
    if (root.right) {
      rescur(root.right, depth + 1)
    }
  }
  let maxDepth: number = 0
  let result: number = 0
  if (root === null) return result
  rescur(root, 1)
  return result
}
