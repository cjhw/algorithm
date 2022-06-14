function diameterOfBinaryTree(root: TreeNode | null): number {
  let len = 0
  function dfs(root: TreeNode | null): number {
    if (root === null) {
      return 0
    }
    let left = dfs(root.left)
    let right = dfs(root.right)
    len = Math.max(len, left + right)
    return Math.max(left, right) + 1
  }
  dfs(root)
  return len
}
