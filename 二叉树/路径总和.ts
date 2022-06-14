function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false
  targetSum -= root.val
  if (root.left === null && root.right === null && targetSum === 0) return true
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
}
