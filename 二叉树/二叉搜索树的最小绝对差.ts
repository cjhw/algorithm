function getMinimumDifference(root: TreeNode | null): number {
  let min: number = Infinity
  let preNode: TreeNode | null = null
  function rescur(root: TreeNode | null): void {
    if (root === null) return
    rescur(root.left)
    if (preNode !== null) {
      min = Math.min(min, root.val - preNode.val)
    }
    preNode = root
    rescur(root.right)
  }
  rescur(root)
  return min
}
